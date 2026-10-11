import React from 'react';

interface FemaleArtProps {
  slug?: string;
  className?: string;
  accentColor?: string;
}

export function getMovementArchetype(slug: string = ''): string {
  const s = slug.toLowerCase();
  if (s.includes('hip-thrust') || s.includes('glute') || s.includes('kickback') || s.includes('bridge') || s.includes('abductor')) {
    return 'hip-thrust';
  }
  if (s.includes('squat') || s.includes('leg-press') || s.includes('hack') || s.includes('wall-sit')) {
    return 'squat';
  }
  if (s.includes('deadlift') || s.includes('rdl') || s.includes('good-morning') || s.includes('hamstring')) {
    return 'deadlift';
  }
  if (s.includes('lunge') || s.includes('split-squat') || s.includes('step-up')) {
    return 'lunge';
  }
  if (s.includes('bench') || s.includes('push-up') || s.includes('chest') || s.includes('fly')) {
    return 'press';
  }
  if (s.includes('shoulder') || s.includes('overhead') || s.includes('lateral-raise') || s.includes('military') || s.includes('arnold')) {
    return 'shoulder';
  }
  if (s.includes('pull-up') || s.includes('lat-pulldown') || s.includes('chin-up')) {
    return 'pullup';
  }
  if (s.includes('row') || s.includes('face-pull') || s.includes('rear-delt')) {
    return 'row';
  }
  if (s.includes('curl') || s.includes('bicep')) {
    return 'curl';
  }
  if (s.includes('tricep') || s.includes('dip') || s.includes('pushdown') || s.includes('skullcrusher')) {
    return 'tricep';
  }
  if (s.includes('plank') || s.includes('crunch') || s.includes('ab') || s.includes('core') || s.includes('deadbug') || s.includes('hollow')) {
    return 'core';
  }
  return 'cardio';
}

export const FemaleExerciseSVG: React.FC<FemaleArtProps> = ({
  slug = '',
  className = '',
  accentColor = '#E0A899',
}) => {
  const archetype = getMovementArchetype(slug);

  // Render dedicated athletic female vector illustration
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center relative select-none ${className}`}>
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full max-h-[300px] transition-transform duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="femaleSkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D0C5" />
            <stop offset="100%" stopColor="#D9A184" />
          </linearGradient>
          <linearGradient id="femaleAthleticWear" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A242A" />
            <stop offset="100%" stopColor="#181418" />
          </linearGradient>
          <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.4" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0.0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Halo */}
        <circle cx="200" cy="200" r="140" fill="url(#accentGlow)" />
        <circle cx="200" cy="200" r="160" stroke={accentColor} strokeWidth="1" strokeDasharray="4 8" opacity="0.25" />

        {archetype === 'squat' && (
          // FEMALE SQUAT (Side View Athletic Silhouette)
          <g filter="url(#glow)">
            {/* Ground / Bench shadow */}
            <ellipse cx="200" cy="350" rx="90" ry="12" fill="#0D0C0C" opacity="0.6" />
            {/* Barbell Across Traps */}
            <line x1="80" y1="135" x2="320" y2="135" stroke="#A39E98" strokeWidth="6" strokeLinecap="round" />
            <rect x="70" y="115" width="16" height="40" rx="3" fill="#D9A184" />
            <rect x="314" y="115" width="16" height="40" rx="3" fill="#D9A184" />

            {/* Female Head & Ponytail */}
            <circle cx="190" cy="115" r="18" fill="url(#femaleSkin)" />
            {/* Sleek Ponytail tied back */}
            <path d="M 180 110 Q 150 115 140 145 Q 155 138 175 125 Z" fill="#3D2B1F" />
            {/* Hair Cap */}
            <path d="M 175 105 Q 190 95 205 105 Q 200 125 180 125 Z" fill="#3D2B1F" />

            {/* Torso & Sports Bra */}
            <path d="M 185 130 Q 170 180 160 215 L 195 220 Q 205 175 198 130 Z" fill="#242024" stroke={accentColor} strokeWidth="1.5" />
            <path d="M 188 135 L 175 170 L 202 170 L 196 135 Z" fill={accentColor} opacity="0.2" />

            {/* Female Pelvis & High-Waist Athletic Leggings */}
            <path d="M 160 215 Q 140 240 145 260 Q 170 270 210 245 L 195 220 Z" fill="#1C181C" stroke={accentColor} strokeWidth="1.5" />

            {/* Deep Squat Thighs (Toned Glutes & Quads) */}
            <path d="M 145 255 Q 210 265 240 260 L 235 295 Q 175 300 140 270 Z" fill="#282228" stroke={accentColor} strokeWidth="1.5" />

            {/* Lower Legs & Ankles */}
            <path d="M 240 260 L 225 335 L 205 335 L 225 285 Z" fill="#1F1B1F" />
            {/* Sneaker */}
            <path d="M 200 335 L 245 335 Q 250 345 235 348 L 195 348 Z" fill="#EAE5E0" />
            {/* Arms holding barbell */}
            <path d="M 195 135 Q 175 145 165 135" stroke={accentColor} strokeWidth="5" strokeLinecap="round" />
          </g>
        )}

        {archetype === 'hip-thrust' && (
          // FEMALE HIP THRUST / GLUTE BRIDGE
          <g filter="url(#glow)">
            {/* Padded Thrust Bench */}
            <rect x="80" y="210" width="70" height="90" rx="8" fill="#1E1C1A" stroke="#3E3832" strokeWidth="2" />
            <line x1="85" y1="210" x2="85" y2="340" stroke="#332E29" strokeWidth="4" />
            <line x1="145" y1="210" x2="145" y2="340" stroke="#332E29" strokeWidth="4" />

            {/* Barbell across pelvis */}
            <line x1="180" y1="130" x2="280" y2="230" stroke="#9E9893" strokeWidth="8" strokeLinecap="round" />
            <circle cx="230" cy="180" r="14" fill={accentColor} />

            {/* Female Head & Ponytail resting on bench */}
            <circle cx="120" cy="195" r="17" fill="url(#femaleSkin)" />
            <path d="M 108 190 Q 90 205 85 235 Q 100 220 115 205 Z" fill="#3D2B1F" />

            {/* Torso Bridge (Upper back supported on bench) */}
            <path d="M 130 205 Q 175 200 215 190 L 225 215 Q 175 225 135 220 Z" fill="#242024" stroke={accentColor} strokeWidth="1.5" />

            {/* Glute Contraction & Pelvic Peak */}
            <path d="M 215 190 Q 245 180 260 210 Q 240 240 220 220 Z" fill="#302630" stroke={accentColor} strokeWidth="2" />

            {/* Thighs at 90-degree angle */}
            <path d="M 260 205 L 305 255 L 285 270 L 245 225 Z" fill="#201C20" stroke={accentColor} strokeWidth="1.5" />

            {/* Vertical Shins to Ground */}
            <path d="M 305 255 L 305 335 L 285 335 L 285 270 Z" fill="#1C181C" />
            <path d="M 280 335 L 320 335 Q 325 345 310 348 L 275 348 Z" fill="#EAE5E0" />
          </g>
        )}

        {archetype === 'deadlift' && (
          // FEMALE ROMANIAN DEADLIFT / HINGE
          <g filter="url(#glow)">
            <ellipse cx="200" cy="350" rx="90" ry="12" fill="#0D0C0C" opacity="0.6" />
            {/* Barbell below knees */}
            <line x1="120" y1="260" x2="310" y2="260" stroke="#9E9893" strokeWidth="6" strokeLinecap="round" />
            <circle cx="120" cy="260" r="24" fill="#2C2825" stroke={accentColor} strokeWidth="2" />
            <circle cx="310" cy="260" r="24" fill="#2C2825" stroke={accentColor} strokeWidth="2" />

            {/* Head & Ponytail */}
            <circle cx="160" cy="145" r="17" fill="url(#femaleSkin)" />
            <path d="M 148 140 Q 120 135 110 160 Q 130 155 150 152 Z" fill="#3D2B1F" />

            {/* Neutral Spine Torso at 45-degree hinge */}
            <path d="M 172 155 L 245 205 L 230 230 L 160 175 Z" fill="#242024" stroke={accentColor} strokeWidth="1.5" />

            {/* Pelvis & Glutes pushed back */}
            <path d="M 245 205 Q 280 215 275 245 Q 245 265 225 240 Z" fill="#302630" stroke={accentColor} strokeWidth="2" />

            {/* Hamstrings loaded */}
            <path d="M 270 240 L 245 295 L 225 290 L 235 240 Z" fill="#201C20" stroke={accentColor} strokeWidth="1.5" />

            {/* Shins vertical */}
            <path d="M 245 295 L 235 340 L 215 340 L 225 290 Z" fill="#1C181C" />
            <path d="M 210 340 L 250 340 Q 255 348 240 350 L 205 350 Z" fill="#EAE5E0" />

            {/* Arms hanging holding barbell */}
            <line x1="175" y1="170" x2="215" y2="260" stroke="url(#femaleSkin)" strokeWidth="6" strokeLinecap="round" />
          </g>
        )}

        {archetype === 'shoulder' && (
          // FEMALE DUMBBELL LATERAL RAISE / OVERHEAD PRESS (Front Toned Silhouette)
          <g filter="url(#glow)">
            <ellipse cx="200" cy="355" rx="70" ry="10" fill="#0D0C0C" opacity="0.6" />

            {/* Head & High Ponytail */}
            <circle cx="200" cy="95" r="18" fill="url(#femaleSkin)" />
            {/* Top knot / ponytail */}
            <path d="M 195 78 Q 200 55 215 60 Q 210 75 205 82 Z" fill="#3D2B1F" />
            <path d="M 188 88 Q 200 78 212 88 Q 208 105 192 105 Z" fill="#3D2B1F" />

            {/* Toned Shoulders & Arms Raised in Lateral Fly */}
            <path d="M 200 115 L 140 135 L 90 145" stroke="url(#femaleSkin)" strokeWidth="8" strokeLinecap="round" />
            <path d="M 200 115 L 260 135 L 310 145" stroke="url(#femaleSkin)" strokeWidth="8" strokeLinecap="round" />

            {/* Dumbbells in hands */}
            <rect x="75" y="132" width="16" height="26" rx="4" fill={accentColor} />
            <rect x="309" y="132" width="16" height="26" rx="4" fill={accentColor} />

            {/* Tapered Waist & Sports Bra */}
            <path d="M 180 120 L 175 165 Q 200 170 225 165 L 220 120 Z" fill="#242024" stroke={accentColor} strokeWidth="1.5" />
            {/* Exposed Core / Midriff */}
            <path d="M 175 165 L 180 200 Q 200 203 220 200 L 225 165 Z" fill="url(#femaleSkin)" />

            {/* High-Waisted Athletic Leggings & Toned Hips */}
            <path d="M 180 200 Q 165 240 185 285 L 200 285 L 200 215 L 200 285 L 215 285 Q 235 240 220 200 Z" fill="#1C181C" stroke={accentColor} strokeWidth="1.5" />

            {/* Lower Legs & Shoes */}
            <path d="M 185 285 L 185 345 L 170 345 L 175 285 Z" fill="#242024" />
            <path d="M 215 285 L 215 345 L 230 345 L 225 285 Z" fill="#242024" />
            <path d="M 165 345 L 190 345 Q 192 352 180 354 L 162 354 Z" fill="#EAE5E0" />
            <path d="M 210 345 L 235 345 Q 238 352 225 354 L 208 354 Z" fill="#EAE5E0" />
          </g>
        )}

        {archetype === 'pullup' && (
          // FEMALE PULL-UP / LAT PULLDOWN (Back V-Taper)
          <g filter="url(#glow)">
            {/* Pull-up Rig Bar */}
            <line x1="60" y1="70" x2="340" y2="70" stroke="#7A7570" strokeWidth="6" strokeLinecap="round" />

            {/* Hands Gripping Bar */}
            <circle cx="110" cy="70" r="6" fill="url(#femaleSkin)" />
            <circle cx="290" cy="70" r="6" fill="url(#femaleSkin)" />

            {/* Arms at Angles Pulling Up */}
            <path d="M 110 70 L 150 120 L 175 140" stroke="url(#femaleSkin)" strokeWidth="7" strokeLinecap="round" />
            <path d="M 290 70 L 250 120 L 225 140" stroke="url(#femaleSkin)" strokeWidth="7" strokeLinecap="round" />

            {/* Head & Ponytail */}
            <circle cx="200" cy="115" r="17" fill="url(#femaleSkin)" />
            <path d="M 194 110 Q 170 125 160 160 Q 185 145 198 125 Z" fill="#3D2B1F" />

            {/* Back V-Taper (Sculpted Lats & Racerback Bra) */}
            <path d="M 170 140 Q 200 145 230 140 L 215 195 Q 200 198 185 195 Z" fill="#242024" stroke={accentColor} strokeWidth="1.5" />
            {/* Racerback cutout */}
            <path d="M 190 142 L 200 160 L 210 142 Z" fill="url(#femaleSkin)" />

            {/* Tapered Waist to Glutes */}
            <path d="M 185 195 Q 165 235 180 270 Q 200 280 220 270 Q 235 235 215 195 Z" fill="#1C181C" stroke={accentColor} strokeWidth="1.5" />

            {/* Crossed Lower Legs in Pullup */}
            <path d="M 180 270 L 195 330 L 205 330 L 220 270 Z" fill="#242024" />
          </g>
        )}

        {archetype === 'core' && (
          // FEMALE PLANK / HOLLOW BODY CORE
          <g filter="url(#glow)">
            <ellipse cx="200" cy="275" rx="140" ry="10" fill="#0D0C0C" opacity="0.6" />

            {/* Forearm on mat */}
            <line x1="120" y1="260" x2="160" y2="260" stroke="url(#femaleSkin)" strokeWidth="6" strokeLinecap="round" />
            <line x1="120" y1="260" x2="135" y2="215" stroke="url(#femaleSkin)" strokeWidth="6" strokeLinecap="round" />

            {/* Head looking down */}
            <circle cx="115" cy="195" r="16" fill="url(#femaleSkin)" />
            <path d="M 105 190 Q 85 200 80 225 Q 100 215 110 205 Z" fill="#3D2B1F" />

            {/* Solid Horizontal Plank Line (Torso, Core, Glutes) */}
            <path d="M 135 215 L 280 235 L 275 255 L 140 240 Z" fill="#242024" stroke={accentColor} strokeWidth="1.5" />

            {/* Legs extended to toes */}
            <path d="M 280 235 L 340 255 L 335 265 L 275 255 Z" fill="#1C181C" stroke={accentColor} strokeWidth="1.5" />
            {/* Sneaker on toes */}
            <path d="M 335 255 L 350 265 L 330 268 Z" fill="#EAE5E0" />
          </g>
        )}

        {/* DEFAULT / CARDIO / OTHER */}
        {(archetype === 'cardio' || archetype === 'press' || archetype === 'lunge' || archetype === 'row' || archetype === 'curl' || archetype === 'tricep') && (
          <g filter="url(#glow)">
            <ellipse cx="200" cy="350" rx="80" ry="10" fill="#0D0C0C" opacity="0.6" />

            {/* Female Head & Ponytail */}
            <circle cx="190" cy="100" r="18" fill="url(#femaleSkin)" />
            <path d="M 180 95 Q 150 100 135 125 Q 155 120 175 110 Z" fill="#3D2B1F" />
            <path d="M 180 90 Q 195 80 205 90 Q 200 110 185 110 Z" fill="#3D2B1F" />

            {/* Toned Athletic Figure Stride */}
            <path d="M 185 118 Q 170 155 165 190 L 195 195 Q 205 155 198 118 Z" fill="#242024" stroke={accentColor} strokeWidth="1.5" />

            {/* Feminine Silhouette Curve & Leggings */}
            <path d="M 165 190 Q 145 225 150 255 Q 185 265 210 240 L 195 195 Z" fill="#1C181C" stroke={accentColor} strokeWidth="1.5" />

            {/* Dynamic Stride Legs */}
            <path d="M 150 255 L 120 330 L 138 335 L 180 270 Z" fill="#201C20" stroke={accentColor} strokeWidth="1.5" />
            <path d="M 195 245 L 245 315 L 235 330 L 175 265 Z" fill="#282228" stroke={accentColor} strokeWidth="1.5" />

            {/* Shoes */}
            <path d="M 115 330 L 140 335 Q 142 342 130 344 L 110 340 Z" fill="#EAE5E0" />
            <path d="M 235 325 L 260 335 Q 262 342 250 344 L 230 335 Z" fill="#EAE5E0" />

            {/* Athletic Arm Drive */}
            <path d="M 190 125 L 225 155 L 215 185" stroke="url(#femaleSkin)" strokeWidth="6" strokeLinecap="round" />
            <path d="M 180 125 L 155 155 L 165 180" stroke="url(#femaleSkin)" strokeWidth="6" strokeLinecap="round" />
          </g>
        )}
      </svg>

      {/* Subtle Aesthetic Archetype Pill */}
      <div className="absolute bottom-2 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#141214]/80 backdrop-blur-sm border border-[#2B2428] text-[9px] font-mono text-neutral-400">
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
        <span className="uppercase tracking-wider font-bold">Female Silhouette · {archetype}</span>
      </div>
    </div>
  );
};
