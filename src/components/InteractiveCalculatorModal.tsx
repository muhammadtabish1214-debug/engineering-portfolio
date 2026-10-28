import React, { useState } from 'react';
import {
  sizeHorizontalThreePhaseSeparator,
  evaluateLineSizing,
  SeparatorSizingInput,
} from '../utils/engineeringCalculations.ts';
import { Language } from '../types/portfolio.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import { Calculator, CheckCircle2, AlertTriangle, RefreshCw, X, Play } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang?: Language;
}

export const InteractiveCalculatorModal: React.FC<Props> = ({ isOpen, onClose, lang = 'en' }) => {
  const [activeTab, setActiveTab] = useState<'separator' | 'line'>('separator');
  const t = TRANSLATIONS[lang].calculator;

  // Separator State
  const [sepInputs, setSepInputs] = useState<SeparatorSizingInput>({
    gasFlowrateMMSCFD: 100.3,
    operatingTempC: 12.3,
    operatingPressureBarg: 85.75,
    gasDensityKgM3: 87.2,
    liquidDensityKgM3: 722.8,
    oilFlowrateBPD: 1520,
    waterFlowrateBPD: 1110,
    kFactor: 0.07,
  });

  // Line Sizing State
  const [lineVelocity, setLineVelocity] = useState<number>(15.8);
  const [mixtureDensity, setMixtureDensity] = useState<number>(87.2);
  const [isContinuous, setIsContinuous] = useState<boolean>(true);

  if (!isOpen) return null;

  const sepOutput = sizeHorizontalThreePhaseSeparator(sepInputs);
  const lineOutput = evaluateLineSizing(lineVelocity, mixtureDensity, isContinuous);

  const loadPresetHP = () => {
    setSepInputs({
      gasFlowrateMMSCFD: 100.3,
      operatingTempC: 12.3,
      operatingPressureBarg: 85.75,
      gasDensityKgM3: 87.2,
      liquidDensityKgM3: 722.8,
      oilFlowrateBPD: 1520,
      waterFlowrateBPD: 1110,
      kFactor: 0.07,
    });
  };

  const loadPresetLP = () => {
    setSepInputs({
      gasFlowrateMMSCFD: 105.14,
      operatingTempC: 109.2,
      operatingPressureBarg: 40.59,
      gasDensityKgM3: 28.87,
      liquidDensityKgM3: 679.7,
      oilFlowrateBPD: 874,
      waterFlowrateBPD: 898,
      kFactor: 0.07,
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-500/10 text-sky-400 rounded-lg border border-sky-500/20">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Live Process Equipment & Hydraulics Sizing Engine
              </h3>
              <p className="text-xs text-slate-400">
                Interactive verification calculator based on API 12J, GPSA Sec 7, and API RP 14E standards.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-800 bg-slate-950/30">
          <button
            onClick={() => setActiveTab('separator')}
            className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'separator'
                ? 'border-sky-500 text-sky-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            3-Phase Horizontal Separator (HSep-Calc+)
          </button>
          <button
            onClick={() => setActiveTab('line')}
            className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'line'
                ? 'border-sky-500 text-sky-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            API RP 14E Line Sizing & Erosion Velocity
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'separator' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Form Inputs */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                    Process Operating Conditions
                  </h4>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={loadPresetHP}
                      className="px-2 py-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-sky-300 rounded border border-slate-700 cursor-pointer"
                    >
                      Load HP Mode (V-0001)
                    </button>
                    <button
                      onClick={loadPresetLP}
                      className="px-2 py-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-amber-300 rounded border border-slate-700 cursor-pointer"
                    >
                      Load LP Mode
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-slate-400 block mb-1">Gas Flowrate (MMSCFD)</label>
                    <input
                      type="number"
                      value={sepInputs.gasFlowrateMMSCFD}
                      onChange={(e) =>
                        setSepInputs({ ...sepInputs, gasFlowrateMMSCFD: Number(e.target.value) })
                      }
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Operating Pressure (barg)</label>
                    <input
                      type="number"
                      value={sepInputs.operatingPressureBarg}
                      onChange={(e) =>
                        setSepInputs({ ...sepInputs, operatingPressureBarg: Number(e.target.value) })
                      }
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Operating Temp (°C)</label>
                    <input
                      type="number"
                      value={sepInputs.operatingTempC}
                      onChange={(e) =>
                        setSepInputs({ ...sepInputs, operatingTempC: Number(e.target.value) })
                      }
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Gas Density (kg/m³)</label>
                    <input
                      type="number"
                      value={sepInputs.gasDensityKgM3}
                      onChange={(e) =>
                        setSepInputs({ ...sepInputs, gasDensityKgM3: Number(e.target.value) })
                      }
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Liquid Density (kg/m³)</label>
                    <input
                      type="number"
                      value={sepInputs.liquidDensityKgM3}
                      onChange={(e) =>
                        setSepInputs({ ...sepInputs, liquidDensityKgM3: Number(e.target.value) })
                      }
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Oil Rate (BPD)</label>
                    <input
                      type="number"
                      value={sepInputs.oilFlowrateBPD}
                      onChange={(e) =>
                        setSepInputs({ ...sepInputs, oilFlowrateBPD: Number(e.target.value) })
                      }
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Water Rate (BPD)</label>
                    <input
                      type="number"
                      value={sepInputs.waterFlowrateBPD}
                      onChange={(e) =>
                        setSepInputs({ ...sepInputs, waterFlowrateBPD: Number(e.target.value) })
                      }
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">K-Factor (Souders-Brown)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={sepInputs.kFactor}
                      onChange={(e) =>
                        setSepInputs({ ...sepInputs, kFactor: Number(e.target.value) })
                      }
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Calculated Sizing Results */}
              <div className="lg:col-span-6 bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wider font-mono">
                      Calculated Sizing Summary
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold ${
                        sepOutput.status === 'OPTIMAL'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      Status: {sepOutput.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 my-4">
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="text-[11px] text-slate-400">Recommended Vessel ID</div>
                      <div className="text-xl font-bold font-mono text-white mt-1">
                        {sepOutput.recommendedDiameterMm} mm
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Inner Shell Diameter</div>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="text-[11px] text-slate-400">Tangent-to-Tangent Length</div>
                      <div className="text-xl font-bold font-mono text-white mt-1">
                        {sepOutput.recommendedLengthMm} mm
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">T/T Length (L:D = {sepOutput.lengthToDiameterRatio})</div>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="text-[11px] text-slate-400">Allowable Gas Velocity</div>
                      <div className="text-lg font-bold font-mono text-sky-300 mt-1">
                        {sepOutput.gasAllowableVelocityMPerSec} m/s
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Souders-Brown V_max</div>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="text-[11px] text-slate-400">Liquid Hold-Up Time</div>
                      <div className="text-lg font-bold font-mono text-emerald-300 mt-1">
                        {sepOutput.liquidHoldUpMinutes} min
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Retention @ 50% NLL</div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase font-mono mb-1.5">
                      Design Notes & Standards Compliance:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {sepOutput.notes.map((note, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-2.5 bg-sky-950/40 border border-sky-900/60 rounded text-[11px] text-sky-300/80">
                  Matches calculation model utilized in Sujawal Gas Processing Facility (V-0001 Inlet Separator).
                </div>
              </div>
            </div>
          )}

          {activeTab === 'line' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Line Sizing Inputs */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                  Piping & Multiphase Hydraulic Parameters
                </h4>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="text-slate-400 block mb-1">
                      Actual Fluid / Gas Stream Velocity (m/s)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={lineVelocity}
                      onChange={(e) => setLineVelocity(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono"
                    />
                    <div className="text-[10px] text-slate-500 mt-1">
                      Equivalent to {(lineVelocity * 3.28084).toFixed(1)} ft/s
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">
                      Mixture Density (kg/m³)
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      value={mixtureDensity}
                      onChange={(e) => setMixtureDensity(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono"
                    />
                    <div className="text-[10px] text-slate-500 mt-1">
                      Equivalent to {(mixtureDensity * 0.062428).toFixed(2)} lb/ft³
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">API RP 14E Service Type</label>
                    <div className="flex items-center gap-4 mt-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="service"
                          checked={isContinuous}
                          onChange={() => setIsContinuous(true)}
                          className="accent-sky-500"
                        />
                        <span>Continuous Service (C = 100)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="service"
                          checked={!isContinuous}
                          onChange={() => setIsContinuous(false)}
                          className="accent-sky-500"
                        />
                        <span>Intermittent Service (C = 125)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Line Sizing Output */}
              <div className="lg:col-span-6 bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wider font-mono">
                      API RP 14E Evaluation
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold ${
                        lineOutput.isWithinLimit
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                      }`}
                    >
                      {lineOutput.isWithinLimit ? 'Criteria Met: PASS' : 'Criteria Failed: EXCEEDS LIMIT'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 my-4">
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="text-[11px] text-slate-400">Allowable Erosion Velocity</div>
                      <div className="text-xl font-bold font-mono text-white mt-1">
                        {lineOutput.allowableVelocityMPerSec} m/s
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">V_e limit</div>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="text-[11px] text-slate-400">Velocity Ratio (V / V_e)</div>
                      <div
                        className={`text-xl font-bold font-mono mt-1 ${
                          lineOutput.isWithinLimit ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {(lineOutput.velocityRatio * 100).toFixed(0)}%
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Threshold ≤ 100%</div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                    <div className="text-slate-400 font-medium mb-1">Engineering Assessment:</div>
                    <div className="text-slate-200">{lineOutput.recommendation}</div>
                  </div>
                </div>

                <div className="mt-4 p-2.5 bg-sky-950/40 border border-sky-900/60 rounded text-[11px] text-sky-300/80">
                  Calculated according to API RP 14E Section 2.5: Design of Platform Piping Systems.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono">Process Engineering Tools by Muhammad Tabish</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
