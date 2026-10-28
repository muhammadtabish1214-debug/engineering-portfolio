import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateSoudersBrownVelocity,
  sizeHorizontalThreePhaseSeparator,
  calculateErosionVelocity,
  evaluateLineSizing,
} from './engineeringCalculations.ts';

test('Souders-Brown allowable velocity calculation returns positive value for valid densities', () => {
  const liquidDensity = 850; // kg/m3
  const gasDensity = 25; // kg/m3
  const vMax = calculateSoudersBrownVelocity(liquidDensity, gasDensity, 0.07);
  assert.ok(vMax > 0, 'Velocity must be positive');
  assert.ok(vMax < 1.0, 'Typical allowable superficial velocity is ~0.4 m/s');
});

test('Separator sizing matches standard L/D ratio of 3.0', () => {
  const result = sizeHorizontalThreePhaseSeparator({
    gasFlowrateMMSCFD: 25,
    operatingTempC: 35,
    operatingPressureBarg: 85,
    gasDensityKgM3: 87.2,
    liquidDensityKgM3: 722.8,
    oilFlowrateBPD: 1520,
    waterFlowrateBPD: 1110,
  });

  assert.equal(result.lengthToDiameterRatio, 3.0);
  assert.ok(result.recommendedDiameterMm >= 1200);
  assert.ok(result.liquidHoldUpMinutes > 3.0);
  assert.equal(result.status, 'OPTIMAL');
});

test('API RP 14E erosion velocity reduces as fluid density increases', () => {
  const lightGas = calculateErosionVelocity(15);
  const denseFluid = calculateErosionVelocity(60);
  assert.ok(
    lightGas.erosionVelocityMPerSec > denseFluid.erosionVelocityMPerSec,
    'Denser fluid must have lower allowable erosion velocity'
  );
});

test('Line sizing correctly flags excessive velocity', () => {
  const safe = evaluateLineSizing(8.0, 30);
  assert.equal(safe.isWithinLimit, true);

  const excessive = evaluateLineSizing(45.0, 30);
  assert.equal(excessive.isWithinLimit, false);
});
