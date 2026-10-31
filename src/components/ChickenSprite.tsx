import React from 'react';

interface ChickenSpriteProps {
  theme: 'red' | 'blue' | 'purple' | 'green';
  state?: 'idle' | 'running' | 'cheering' | 'sad';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
  playerNumber?: number;
}

export const ChickenSprite: React.FC<ChickenSpriteProps> = ({
  theme,
  state = 'idle',
  size = 'md',
  showBadge = true,
  playerNumber,
}) => {
  // Theme color maps
  const colorMap = {
    red: {
      body: '#EA580C', // deep vibrant orange/red
      bodyAccent: '#F97316',
      comb: '#DC2626', // crimson red
      wattle: '#B91C1C',
      tail1: '#DC2626',
      tail2: '#F59E0B',
      tail3: '#2563EB',
      wing: '#EA580C',
      wingDetail: '#FED7AA',
      beak: '#FBBF24',
      feet: '#F59E0B',
      headband: '#DC2626',
      headbandStripe: '#FFFFFF',
    },
    blue: {
      body: '#0284C7',
      bodyAccent: '#38BDF8',
      comb: '#E11D48',
      wattle: '#BE123C',
      tail1: '#0284C7',
      tail2: '#0D9488',
      tail3: '#FBBF24',
      wing: '#0369A1',
      wingDetail: '#BAE6FD',
      beak: '#FBBF24',
      feet: '#F59E0B',
      headband: '#0284C7',
      headbandStripe: '#FFFFFF',
    },
    purple: {
      body: '#7C3AED',
      bodyAccent: '#A78BFA',
      comb: '#BE185D',
      wattle: '#9D174D',
      tail1: '#6D28D9',
      tail2: '#4338CA',
      tail3: '#EC4899',
      wing: '#5B21B6',
      wingDetail: '#DDD6FE',
      beak: '#FBBF24',
      feet: '#F59E0B',
      headband: '#581C87',
      headbandStripe: '#FBBF24',
    },
    green: {
      body: '#059669',
      bodyAccent: '#34D399',
      comb: '#DC2626',
      wattle: '#B91C1C',
      tail1: '#047857',
      tail2: '#0D9488',
      tail3: '#EAB308',
      wing: '#065F46',
      wingDetail: '#A7F3D0',
      beak: '#FBBF24',
      feet: '#F59E0B',
      headband: '#047857',
      headbandStripe: '#FEF08A',
    },
  }[theme];

  const sizePixels = {
    sm: 52,
    md: 72,
    lg: 96,
    xl: 130,
  }[size];

  // Dynamic animation class
  const animClass =
    state === 'running'
      ? 'animate-chicken-run'
      : state === 'cheering'
      ? 'animate-bounce'
      : state === 'sad'
      ? 'opacity-80 scale-95'
      : '';

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${animClass}`}
      style={{ width: sizePixels, height: sizePixels }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-md overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tail Feathers */}
        <path
          d="M 28 50 C 14 36 6 44 2 56 C 10 54 22 56 28 58 Z"
          fill={colorMap.tail1}
        />
        <path
          d="M 26 46 C 10 26 4 36 0 46 C 8 44 20 48 27 53 Z"
          fill={colorMap.tail2}
        />
        <path
          d="M 28 54 C 16 52 10 66 6 72 C 16 66 24 64 30 62 Z"
          fill={colorMap.tail3}
        />

        {/* Feet / Legs */}
        {state === 'running' ? (
          <g className="transition-transform">
            {/* Running feet stance */}
            <path
              d="M 44 76 L 36 90 M 36 90 L 30 92 M 36 90 L 40 93"
              stroke={colorMap.feet}
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M 58 76 L 68 88 M 68 88 L 74 88 M 68 88 L 66 94"
              stroke={colorMap.feet}
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        ) : (
          <g>
            {/* Standing feet */}
            <path
              d="M 46 76 L 44 92 M 44 92 L 38 94 M 44 92 L 48 94"
              stroke={colorMap.feet}
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M 58 76 L 60 92 M 60 92 L 56 94 M 60 92 L 66 94"
              stroke={colorMap.feet}
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        )}

        {/* Chicken Body */}
        <path
          d="M 32 58 C 32 40 50 36 64 42 C 76 46 80 62 76 72 C 70 82 42 84 32 70 Z"
          fill={colorMap.body}
        />
        {/* Chest Accent / Highlights */}
        <path
          d="M 52 50 C 60 52 68 60 64 74 C 54 78 44 74 44 64 Z"
          fill={colorMap.bodyAccent}
          opacity="0.8"
        />

        {/* Wing */}
        <g
          className={
            state === 'running' || state === 'cheering'
              ? 'origin-top-left -rotate-6 transition-transform'
              : ''
          }
        >
          <path
            d="M 40 54 C 40 48 56 50 58 60 C 58 68 46 72 38 64 Z"
            fill={colorMap.wing}
          />
          <path
            d="M 44 58 C 48 54 54 56 52 64 C 48 68 42 66 44 58 Z"
            fill={colorMap.wingDetail}
            opacity="0.9"
          />
        </g>

        {/* Head */}
        <circle cx="68" cy="36" r="14" fill={colorMap.body} />

        {/* Comb (Jengger Ayam) */}
        <path
          d="M 64 24 C 62 16 68 14 70 20 C 72 13 80 15 78 23 C 82 18 88 22 84 28 C 80 29 74 27 64 25 Z"
          fill={colorMap.comb}
        />

        {/* Wattle (Pial Ayam) */}
        <path
          d="M 72 44 C 72 50 78 52 76 46 Z"
          fill={colorMap.wattle}
        />

        {/* Traditional Headband / Ikat Kepala Nusantara */}
        <path
          d="M 58 32 C 64 29 74 30 82 35 L 81 39 C 73 34 63 33 57 36 Z"
          fill={colorMap.headband}
        />
        <path
          d="M 59 34 C 65 31 73 32 80 37"
          stroke={colorMap.headbandStripe}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Ribbon knot tail */}
        <path
          d="M 56 36 L 50 33 M 56 36 L 52 40"
          stroke={colorMap.headband}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Beak */}
        <path
          d="M 78 36 L 90 40 L 78 44 Z"
          fill={colorMap.beak}
        />

        {/* Eye */}
        {state === 'sad' ? (
          <path
            d="M 68 35 L 75 35"
            stroke="#1E293B"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ) : (
          <g>
            <circle cx="72" cy="34" r="3.5" fill="#FFFFFF" />
            <circle cx="73.5" cy="34" r="2" fill="#0F172A" />
            <circle cx="74" cy="33" r="0.8" fill="#FFFFFF" />
          </g>
        )}
      </svg>

      {/* Player Number Badge */}
      {showBadge && playerNumber && (
        <span
          className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm ring-2 ring-white"
          style={{ backgroundColor: colorMap.comb }}
        >
          {playerNumber}
        </span>
      )}
    </div>
  );
};
