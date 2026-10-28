/**
 * Process Engineering Calculation Utilities
 * Standard equations based on API RP 14E, GPSA Engineering Data Book, and API 521.
 */

export interface SeparatorSizingInput {
  gasFlowrateMMSCFD: number;
  operatingTempC: number;
  operatingPressureBarg: number;
  gasDensityKgM3: number;
  liquidDensityKgM3: number;
  oilFlowrateBPD: number;
  waterFlowrateBPD: number;
  kFactor?: number; // Souders-Brown empirical constant (typically 0.05 to 0.15 m/s)
}

export interface SeparatorSizingOutput {
  gasAllowableVelocityMPerSec: number;
  requiredVaporAreaM2: number;
  recommendedDiameterMm: number;
  recommendedLengthMm: number;
  lengthToDiameterRatio: number;
  liquidHoldUpMinutes: number;
  status: 'OPTIMAL' | 'ACCEPTABLE' | 'WARNING';
  notes: string[];
}

/**
 * Calculates Souders-Brown allowable gas superficial velocity
 * V_max = K * sqrt((rho_L - rho_G) / rho_G)
 */
export function calculateSoudersBrownVelocity(
  liquidDensityKgM3: number,
  gasDensityKgM3: number,
  kFactor: number = 0.07 // standard for horizontal separator with mesh pad
): number {
  if (gasDensityKgM3 <= 0 || liquidDensityKgM3 <= gasDensityKgM3) {
    return 0;
  }
  return kFactor * Math.sqrt((liquidDensityKgM3 - gasDensityKgM3) / gasDensityKgM3);
}

/**
 * Sizing calculation for 3-Phase Horizontal Separator
 * Similar to HSep-Calc+ logic used in the Inlet Separator (V-0001) project
 */
export function sizeHorizontalThreePhaseSeparator(
  input: SeparatorSizingInput
): SeparatorSizingOutput {
  const k = input.kFactor ?? 0.07;
  const vAllowable = calculateSoudersBrownVelocity(
    input.liquidDensityKgM3,
    input.gasDensityKgM3,
    k
  );

  // Actual gas volumetric flowrate (m3/s)
  // 1 MMSCFD ≈ 1179.87 Sm3/h ≈ 0.3277 Sm3/s
  // Corrected for operating pressure and temperature
  const standardVolFlowM3PerS = (input.gasFlowrateMMSCFD * 1179.87) / 3600;
  const operatingPressureKpa = (input.operatingPressureBarg + 1.01325) * 100;
  const standardPressureKpa = 101.325;
  const operatingTempK = input.operatingTempC + 273.15;
  const standardTempK = 288.15; // 15 C

  const actualGasFlowM3PerS =
    standardVolFlowM3PerS *
    (standardPressureKpa / operatingPressureKpa) *
    (operatingTempK / standardTempK);

  // Required vapor cross-sectional area (assuming 50% vapor space above NLL)
  const requiredVaporArea = vAllowable > 0 ? actualGasFlowM3PerS / vAllowable : 0.5;
  const totalRequiredArea = requiredVaporArea * 2.0;

  // Approximate inner diameter from circular area: A = pi * D^2 / 4 -> D = sqrt(4 * A / pi)
  let rawDiameterM = Math.sqrt((4 * totalRequiredArea) / Math.PI);
  // Round up to standard shell diameter (e.g. increments of 100 mm)
  let recommendedDiameterMm = Math.max(1200, Math.ceil(rawDiameterM * 10) * 100);

  // Liquid retention time requirement (typically 3 to 5 minutes for light hydrocarbons)
  const totalLiquidBPD = input.oilFlowrateBPD + input.waterFlowrateBPD;
  const liquidVolM3PerMin = (totalLiquidBPD * 0.1589873) / 1440; // 1 BBL = 0.1589873 m3

  // Standard target L/D ratio: 2.5 to 4.0 (HSep-Calc+ used L:D = 3.00 for V-0001)
  let recommendedLengthMm = Math.round(recommendedDiameterMm * 3.0);
  
  // Calculate total vessel volume and liquid volume at 50% level
  const actualRadiusM = recommendedDiameterMm / 2000;
  const actualLengthM = recommendedLengthMm / 1000;
  const totalVolumeM3 = Math.PI * actualRadiusM * actualRadiusM * actualLengthM;
  const liquidVolumeM3 = totalVolumeM3 * 0.5;

  const liquidHoldUpMinutes =
    liquidVolM3PerMin > 0 ? liquidVolumeM3 / liquidVolM3PerMin : 15;

  const notes: string[] = [];
  let status: 'OPTIMAL' | 'ACCEPTABLE' | 'WARNING' = 'OPTIMAL';

  const ldRatio = recommendedLengthMm / recommendedDiameterMm;
  if (ldRatio < 2.5 || ldRatio > 5.0) {
    status = 'ACCEPTABLE';
    notes.push(`L/D ratio of ${ldRatio.toFixed(2)} is outside standard 2.5 - 4.0 range`);
  } else {
    notes.push(`L/D ratio of ${ldRatio.toFixed(2)} conforms to GPSA Section 7`);
  }

  if (liquidHoldUpMinutes < 3.0) {
    status = 'WARNING';
    notes.push('Liquid hold-up time is under 3 minutes; consider increasing vessel size');
  } else {
    notes.push(`Liquid retention time of ${liquidHoldUpMinutes.toFixed(1)} min satisfies API 12J`);
  }

  notes.push(`Souders-Brown allowable velocity: ${vAllowable.toFixed(2)} m/s (K = ${k.toFixed(2)})`);

  return {
    gasAllowableVelocityMPerSec: Number(vAllowable.toFixed(2)),
    requiredVaporAreaM2: Number(requiredVaporArea.toFixed(2)),
    recommendedDiameterMm,
    recommendedLengthMm,
    lengthToDiameterRatio: Number(ldRatio.toFixed(2)),
    liquidHoldUpMinutes: Number(liquidHoldUpMinutes.toFixed(1)),
    status,
    notes,
  };
}

/**
 * Calculates API RP 14E allowable erosion velocity for piping
 * V_e = C / sqrt(rho_m)
 * @param mixtureDensityKgM3 Fluid or gas mixture density (kg/m3)
 * @param cFactor Empirical constant (100 for continuous, 125 for intermittent service, in US customary or converted)
 */
export function calculateErosionVelocity(
  mixtureDensityKgM3: number,
  cFactor: number = 100 // US customary units: 100 or 122
): {
  erosionVelocityMPerSec: number;
  erosionVelocityFtPerSec: number;
  rhoV2KgMPerS2: number;
} {
  // Convert kg/m3 to lb/ft3 (1 kg/m3 ≈ 0.062428 lb/ft3)
  const rhoLbFt3 = mixtureDensityKgM3 * 0.062428;
  const vErosFtSec = rhoLbFt3 > 0 ? cFactor / Math.sqrt(rhoLbFt3) : 0;
  const vErosMSec = vErosFtSec * 0.3048;

  // Kinetic energy limit rho * v^2
  const rhoV2KgMPerS2 = mixtureDensityKgM3 * vErosMSec * vErosMSec;

  return {
    erosionVelocityMPerSec: Number(vErosMSec.toFixed(2)),
    erosionVelocityFtPerSec: Number(vErosFtSec.toFixed(1)),
    rhoV2KgMPerS2: Math.round(rhoV2KgMPerS2),
  };
}

/**
 * Checks pipe sizing velocity against API RP 14E
 */
export function evaluateLineSizing(
  actualVelocityMPerSec: number,
  mixtureDensityKgM3: number,
  isContinuousService: boolean = true
): {
  velocityRatio: number;
  isWithinLimit: boolean;
  allowableVelocityMPerSec: number;
  recommendation: string;
} {
  const cFactor = isContinuousService ? 100 : 125;
  const { erosionVelocityMPerSec } = calculateErosionVelocity(mixtureDensityKgM3, cFactor);
  
  const velocityRatio = erosionVelocityMPerSec > 0 ? actualVelocityMPerSec / erosionVelocityMPerSec : 1;
  const isWithinLimit = velocityRatio <= 1.0;

  let recommendation = 'Line velocity is acceptable per API RP 14E';
  if (velocityRatio > 1.0) {
    recommendation = `Velocity exceeds erosional limit (${actualVelocityMPerSec.toFixed(1)} > ${erosionVelocityMPerSec.toFixed(1)} m/s). Increase pipe schedule or nominal diameter.`;
  } else if (velocityRatio > 0.85) {
    recommendation = 'Velocity approaching erosional threshold (>85%). Monitor noise and erosion corrosion.';
  }

  return {
    velocityRatio: Number(velocityRatio.toFixed(2)),
    isWithinLimit,
    allowableVelocityMPerSec: erosionVelocityMPerSec,
    recommendation,
  };
}
