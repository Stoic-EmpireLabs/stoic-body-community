import React, { useState } from 'react';
import { useGymStore } from '../store/useGymStore';
import {
  Shield,
  Dumbbell,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  X,
  Target,
  Clock,
  Heart,
  Flame,
  User,
  Zap,
} from 'lucide-react';
import type { OnboardingAnswers, CoachPersonality } from '../types';

export const OnboardingModal: React.FC = () => {
  const { showOnboarding, completeOnboarding, dismissOnboarding } = useGymStore();

  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<OnboardingAnswers>({
    gender: 'female',
    name: 'Sophia',
    callsign: 'Athena',
    focus: 'glute_waist',
    experience: 'intermediate',
    equipment: 'full_gym',
    fasting: '16_8',
    personality: 'athena',
  });

  if (!showOnboarding) return null;

  const totalSteps = 4;

  const handleGenderSelect = (gender: 'male' | 'female') => {
    setAnswers({
      ...answers,
      gender,
      name: gender === 'female' ? 'Sophia' : 'Marcus',
      callsign: gender === 'female' ? 'Athena' : 'Spartan',
      focus: gender === 'female' ? 'glute_waist' : 'combat',
      personality: gender === 'female' ? 'athena' : 'marine',
      fasting: gender === 'female' ? '16_8' : 'omad',
    });
  };

  const handleFinish = () => {
    completeOnboarding(answers);
  };

  const isFemale = answers.gender === 'female';
  const accentColor = isFemale ? '#E0A899' : '#D9A184';

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#161416] border border-[#2B2428] rounded-[32px] w-full max-w-xl flex flex-col overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="p-5 border-b border-[#242024] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs border"
              style={{
                backgroundColor: isFemale ? 'rgba(224, 168, 153, 0.15)' : 'rgba(217, 161, 132, 0.15)',
                borderColor: isFemale ? 'rgba(224, 168, 153, 0.4)' : 'rgba(217, 161, 132, 0.4)',
                color: accentColor,
              }}
            >
              {step}/{totalSteps}
            </div>
            <div>
              <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest block font-mono">
                STOIC BODY · ONBOARDING
              </span>
              <h3 className="text-base font-black text-white">Create Your Athlete Sanctuary</h3>
            </div>
          </div>

          <button
            onClick={dismissOnboarding}
            className="px-3 py-1.5 rounded-xl bg-[#201D1F] hover:bg-[#2A2629] border border-[#302B2E] text-xs font-bold text-neutral-400 hover:text-white transition-all flex items-center gap-1.5"
            title="Close Setup"
          >
            <span>Skip</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="w-full h-1 bg-[#121012]">
          <div
            className="h-full transition-all duration-300 rounded-full"
            style={{
              width: `${(step / totalSteps) * 100}%`,
              backgroundColor: accentColor,
            }}
          />
        </div>

        {/* Step Content */}
        <div className="p-6 space-y-5 flex-1 overflow-y-auto max-h-[70vh]">
          {/* STEP 1: Athlete Gender & Archetype */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xl font-black text-white tracking-tight">
                  Choose your athlete profile and interface mode
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Calibrates exercise library illustrations, color aesthetics, quotes, and training splits.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {/* Female Archetype */}
                <div
                  onClick={() => handleGenderSelect('female')}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between active:scale-98 relative ${
                    isFemale
                      ? 'bg-[#261E22] border-[#E0A899] shadow-lg shadow-[#E0A899]/15 text-white scale-[1.02]'
                      : 'bg-[#141214] border-[#262024] hover:border-[#3E343A] text-neutral-400'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1C161A] border border-[#E0A899]/30 flex items-center justify-center text-[#E0A899] text-xl font-black">
                      ♀
                    </div>
                    {isFemale && <Check className="w-5 h-5 text-[#E0A899] stroke-[3]" />}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-base text-white">Female / Empress</span>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-[#E0A899]/20 text-[#E0A899]">
                        Athena
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                      All exercise illustrations feature female athletes. Rose gold and obsidian palette, glute and posture periodization, and female stoic wisdom.
                    </p>
                  </div>
                </div>

                {/* Male Archetype */}
                <div
                  onClick={() => handleGenderSelect('male')}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between active:scale-98 relative ${
                    !isFemale
                      ? 'bg-[#221C18] border-[#D9A184] shadow-lg shadow-[#D9A184]/15 text-white scale-[1.02]'
                      : 'bg-[#141214] border-[#262024] hover:border-[#3E343A] text-neutral-400'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1C1A18] border border-[#D9A184]/30 flex items-center justify-center text-[#D9A184] text-xl font-black">
                      ♂
                    </div>
                    {!isFemale && <Check className="w-5 h-5 text-[#D9A184] stroke-[3]" />}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-base text-white">Male / Spartan</span>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-[#D9A184]/20 text-[#D9A184]">
                        USMC / Stoic
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                      All exercise illustrations feature male athletic forms. Tactical obsidian amber palette, heavy compound splits, and combat conditioning quotes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Profile Name & Callsign & Focus */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-black text-white tracking-tight">
                  Set up your athlete identity
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  How your profile and dashboard will address you.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-neutral-300 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={answers.name || ''}
                    onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
                    placeholder={isFemale ? 'e.g. Sophia' : 'e.g. Marcus'}
                    className="w-full bg-[#100F10] border border-[#2B2428] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E0A899]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-300 block mb-1">
                    Callsign / Title
                  </label>
                  <input
                    type="text"
                    value={answers.callsign || ''}
                    onChange={(e) => setAnswers({ ...answers, callsign: e.target.value })}
                    placeholder={isFemale ? 'e.g. Athena' : 'e.g. Spartan'}
                    className="w-full bg-[#100F10] border border-[#2B2428] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E0A899]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <label className="text-xs font-bold text-neutral-300 block mb-2">
                  Primary Physical Focus
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(isFemale
                    ? [
                        {
                          id: 'glute_waist' as const,
                          title: 'Glute Hypertrophy & Waist Sculpt',
                          desc: 'Hip thrusts, RDLs, split squats & posterior chain focus',
                        },
                        {
                          id: 'pilates_tone' as const,
                          title: 'Lean Toning & Core Posture',
                          desc: 'Full body definition, pelvic floor stability & alignment',
                        },
                        {
                          id: 'athletic' as const,
                          title: 'Metabolic Conditioning & HIIT',
                          desc: 'Cardiovascular endurance, stamina & functional athleticism',
                        },
                        {
                          id: 'strength' as const,
                          title: 'Compound Iron Strength',
                          desc: 'Squat, deadlift, overhead barbell & progressive overload',
                        },
                      ]
                    : [
                        {
                          id: 'combat' as const,
                          title: 'USMC Combat Conditioning',
                          desc: 'Readiness, stamina, tactical pull-ups, push & grit',
                        },
                        {
                          id: 'hypertrophy' as const,
                          title: 'Muscle Hypertrophy & Density',
                          desc: 'Aesthetic shape, volume overload & high time-under-tension',
                        },
                        {
                          id: 'strength' as const,
                          title: 'Raw Iron Strength & 1RM',
                          desc: 'Squat, bench, deadlift, overhead power & compound focus',
                        },
                        {
                          id: 'athletic' as const,
                          title: 'Lean Athletic Engine',
                          desc: 'Conditioning intervals, boxing bags & functional mobility',
                        },
                      ]
                  ).map((f) => {
                    const isSelected = answers.focus === f.id;
                    return (
                      <div
                        key={f.id}
                        onClick={() => setAnswers({ ...answers, focus: f.id })}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between active:scale-98 ${
                          isSelected
                            ? 'bg-[#221C20] border-[#E0A899] text-white shadow'
                            : 'bg-[#121012] border-[#242024] hover:border-[#383036] text-neutral-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-xs text-white">{f.title}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#E0A899] stroke-[3]" />}
                        </div>
                        <p className="text-[11px] text-neutral-400">{f.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Experience & Equipment */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-black text-white tracking-tight">
                  Your experience & equipment access
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Calibrates volume, warm-up stages, and rest interval timers.
                </p>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-300 block mb-2">
                  Lifting Experience
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'recruit' as const, label: 'Recruit', sub: '< 1 Year' },
                    { id: 'intermediate' as const, label: 'Dedicated', sub: '1-3 Years' },
                    { id: 'veteran' as const, label: 'Advanced', sub: '3+ Years' },
                  ].map((lvl) => (
                    <button
                      key={lvl.id}
                      type="button"
                      onClick={() => setAnswers({ ...answers, experience: lvl.id })}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        answers.experience === lvl.id
                          ? 'bg-[#261E22] border-[#E0A899] text-white font-bold'
                          : 'bg-[#121012] border-[#242024] text-neutral-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-black">{lvl.label}</div>
                      <div className="text-[10px] text-neutral-500 font-mono mt-0.5">{lvl.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <label className="text-xs font-bold text-neutral-300 block mb-2">
                  Primary Equipment Setup
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'full_gym' as const, title: 'Full Commercial Gym', desc: 'Barbells, dumbbells, cable stacks & machines' },
                    { id: 'barbell_home' as const, title: 'Iron Home Gym', desc: 'Power rack, Olympic barbell, plates & bench' },
                    { id: 'dumbbells' as const, title: 'Dumbbells & Bench', desc: 'Adjustable dumbbells, bands & flat bench' },
                    { id: 'bodyweight' as const, title: 'Bodyweight & Mobility', desc: 'Calisthenics, pull-up bar, mats & bands' },
                  ].map((eq) => (
                    <div
                      key={eq.id}
                      onClick={() => setAnswers({ ...answers, equipment: eq.id })}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        answers.equipment === eq.id
                          ? 'bg-[#261E22] border-[#E0A899] text-white shadow'
                          : 'bg-[#121012] border-[#242024] hover:border-[#383036] text-neutral-300'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-xs text-white">{eq.title}</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">{eq.desc}</div>
                      </div>
                      {answers.equipment === eq.id && <Check className="w-4 h-4 text-[#E0A899] stroke-[3]" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Fasting & Nutrition Protocol */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-black text-white tracking-tight">
                  Choose your fasting & feeding protocol
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Configures your daily fasting countdown, feeding windows, and nutrient targets.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                {[
                  {
                    id: '16_8' as const,
                    title: '16:8 Lean Gains Protocol (Recommended for Women)',
                    desc: '16h Fast / 8h Feeding Window (e.g. 12:00 - 20:00). Ideal for hormonal balance, thyroid health, and muscle retention.',
                    badge: 'OPTIMAL BALANCE',
                  },
                  {
                    id: 'omad' as const,
                    title: '23:1 OMAD Warrior Feast',
                    desc: '23h Fast / 1h Nutrient-Dense Feast at 17:30. Maximal autophagy surge and cognitive focus during daytime.',
                    badge: 'DEEP AUTOPHAGY',
                  },
                  {
                    id: '20_4' as const,
                    title: '20:4 Warrior Window',
                    desc: '20h Fast / 4h Feeding Window (e.g. 16:00 - 20:00). High insulin sensitivity with a two-meal refeed.',
                    badge: 'WARRIOR',
                  },
                  {
                    id: 'standard' as const,
                    title: 'Standard Whole Food Protocol',
                    desc: 'Consistent 3-meal feeding schedule with high protein distribution across the day.',
                    badge: 'STANDARD',
                  },
                ].map((proto) => {
                  const isSelected = answers.fasting === proto.id;
                  return (
                    <div
                      key={proto.id}
                      onClick={() => setAnswers({ ...answers, fasting: proto.id })}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between active:scale-99 ${
                        isSelected
                          ? 'bg-[#261E22] border-[#E0A899] text-white shadow-md'
                          : 'bg-[#121012] border-[#242024] hover:border-[#383036] text-neutral-300'
                      }`}
                    >
                      <div className="pr-4">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-black text-xs text-white">{proto.title}</span>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#E0A899]/15 text-[#E0A899] border border-[#E0A899]/30">
                            {proto.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-400 leading-relaxed">{proto.desc}</p>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                          isSelected ? 'bg-[#E0A899] text-[#140D09]' : 'border border-[#383036]'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="p-5 border-t border-[#242024] bg-[#121012] flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2.5 rounded-xl bg-[#1C181C] hover:bg-[#262026] text-neutral-300 font-bold text-xs flex items-center gap-1.5 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <div />
          )}

          {step < totalSteps ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-6 py-2.5 rounded-xl font-black text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-lg"
              style={{
                backgroundColor: accentColor,
                color: '#140D09',
              }}
            >
              Next Step
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="px-6 py-2.5 rounded-xl font-black text-xs flex items-center gap-2 transition-all active:scale-95 shadow-xl"
              style={{
                backgroundColor: accentColor,
                color: '#140D09',
              }}
            >
              <Sparkles className="w-4 h-4 fill-current" />
              Forge My Protocol & Launch
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
