import React from 'react';
import { Player } from '../types/game';
import { ChickenSprite } from './ChickenSprite';
import { Flag, Trophy, Flame } from 'lucide-react';

interface RaceTrackProps {
  players: Player[];
  activePlayerId: number | null;
  targetSteps: number;
  highlightPlayerId?: number | null;
  isRacing?: boolean;
}

export const RaceTrack: React.FC<RaceTrackProps> = ({
  players,
  activePlayerId,
  targetSteps,
  highlightPlayerId,
  isRacing = false,
}) => {
  return (
    <div className="w-full bg-white rounded-2xl border border-amber-200/80 shadow-md overflow-hidden relative">
      {/* Track Header / Arena Banner */}
      <div className="px-5 py-3 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center font-bold text-sm">
            🏁
          </div>
          <div>
            <h2 className="text-sm md:text-base font-bold tracking-tight">
              Arena Balapan Ayam Nusantara
            </h2>
            <p className="text-[11px] text-amber-100 hidden sm:block">
              Target Finish: {targetSteps} langkah jawaban benar · Menjawab kuis memajukan ayammu!
            </p>
          </div>
        </div>

        {/* Legend / Step Counter */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full">
            <Trophy className="w-3.5 h-3.5 text-yellow-300" />
            <span>Garis Akhir: {targetSteps} Langkah</span>
          </div>
        </div>
      </div>

      {/* Track Lanes Container */}
      <div className="p-4 sm:p-5 space-y-3 bg-gradient-to-b from-amber-50/50 to-orange-50/30">
        {players.map((player, idx) => {
          const progressPercent = Math.min(100, (player.steps / targetSteps) * 100);
          const isActive = activePlayerId === player.id;
          const isHighlighted = highlightPlayerId === player.id;
          const isWinner = player.steps >= targetSteps;

          const laneColorStyles = {
            red: {
              border: 'border-red-200',
              bgActive: 'bg-red-50/80',
              trackBg: 'bg-red-100/60',
              badge: 'bg-red-600 text-white',
              bar: 'bg-gradient-to-r from-red-500 to-orange-500',
              text: 'text-red-700',
            },
            blue: {
              border: 'border-blue-200',
              bgActive: 'bg-blue-50/80',
              trackBg: 'bg-blue-100/60',
              badge: 'bg-sky-600 text-white',
              bar: 'bg-gradient-to-r from-sky-500 to-blue-600',
              text: 'text-sky-700',
            },
            purple: {
              border: 'border-purple-200',
              bgActive: 'bg-purple-50/80',
              trackBg: 'bg-purple-100/60',
              badge: 'bg-purple-600 text-white',
              bar: 'bg-gradient-to-r from-purple-500 to-indigo-600',
              text: 'text-purple-700',
            },
            green: {
              border: 'border-emerald-200',
              bgActive: 'bg-emerald-50/80',
              trackBg: 'bg-emerald-100/60',
              badge: 'bg-emerald-600 text-white',
              bar: 'bg-gradient-to-r from-emerald-500 to-teal-600',
              text: 'text-emerald-700',
            },
          }[player.theme];

          return (
            <div
              key={player.id}
              className={`rounded-xl border p-2.5 sm:p-3 transition-all duration-300 relative ${
                isActive
                  ? `${laneColorStyles.border} ${laneColorStyles.bgActive} shadow-sm ring-2 ring-amber-400/50`
                  : 'border-slate-200 bg-white/90'
              } ${isHighlighted ? 'scale-[1.01]' : ''}`}
            >
              {/* Lane Info Header */}
              <div className="flex items-center justify-between mb-1.5 text-xs">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded font-bold text-[11px] ${laneColorStyles.badge}`}>
                    Pemain {player.id}
                  </span>
                  <span className="font-bold text-slate-800 text-sm">
                    {player.name}
                  </span>
                  <span className="text-slate-400 font-medium hidden sm:inline">
                    · {player.chickenName}
                  </span>
                  {player.streak >= 2 && (
                    <span className="inline-flex items-center gap-0.5 text-orange-600 font-bold bg-orange-100 px-1.5 py-0.5 rounded text-[10px]">
                      <Flame className="w-3 h-3 fill-orange-500 text-orange-500" />
                      {player.streak}x Beruntun!
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 font-semibold text-slate-600 tabular-nums">
                  <span className="text-[11px]">
                    Langkah: <b className="text-slate-900">{player.steps}</b> / {targetSteps}
                  </span>
                  <span className="text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded text-[11px] font-bold">
                    {player.score} Poin
                  </span>
                </div>
              </div>

              {/* Running Track Strip */}
              <div className="relative h-14 sm:h-16 w-full rounded-lg bg-stone-100 border border-stone-200/90 overflow-hidden flex items-center">
                {/* Track Ground Pattern (Subtle road markers) */}
                <div className="absolute inset-0 flex justify-between items-center px-4 pointer-events-none opacity-40">
                  {Array.from({ length: targetSteps + 1 }).map((_, stepIdx) => (
                    <div
                      key={stepIdx}
                      className="h-full flex flex-col items-center justify-between py-1"
                    >
                      <div className="w-0.5 h-2 bg-stone-400" />
                      <span className="text-[9px] font-bold text-stone-500 tabular-nums">
                        {stepIdx === 0 ? 'START' : stepIdx === targetSteps ? 'FINISH' : stepIdx}
                      </span>
                      <div className="w-0.5 h-2 bg-stone-400" />
                    </div>
                  ))}
                </div>

                {/* Progress Track Fill behind chicken */}
                <div
                  className={`absolute top-0 bottom-0 left-0 transition-all duration-700 ease-out opacity-25 ${laneColorStyles.bar}`}
                  style={{ width: `${Math.max(4, progressPercent)}%` }}
                />

                {/* Finish Line Checkered Arch on Far Right */}
                <div className="absolute right-0 top-0 bottom-0 w-9 bg-stone-200/90 border-l-2 border-dashed border-red-500 flex flex-col items-center justify-center z-0">
                  <div className="w-full h-full opacity-35 bg-[repeating-conic-gradient(#000_0_25%,#fff_0_50%)] bg-[length:12px_12px]" />
                  <Flag className="w-4 h-4 text-red-600 absolute z-10" />
                </div>

                {/* Animated Chicken Sprites on Track */}
                <div
                  className="absolute z-10 transition-all duration-700 ease-out flex items-center"
                  style={{
                    left: `calc(${progressPercent}% * 0.85 + 4px)`,
                  }}
                >
                  <div className="relative">
                    <ChickenSprite
                      theme={player.theme}
                      state={
                        isWinner
                          ? 'cheering'
                          : isRacing || player.lastAction === 'correct'
                          ? 'running'
                          : player.lastAction === 'wrong'
                          ? 'sad'
                          : 'idle'
                      }
                      size="sm"
                      playerNumber={player.id}
                    />

                    {/* Dust trail when running */}
                    {(isRacing || player.lastAction === 'correct') && (
                      <div className="absolute -left-3 bottom-1 flex gap-1 pointer-events-none">
                        <span className="w-2 h-2 rounded-full bg-amber-400/60 animate-dust" />
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-300/60 animate-dust delay-75" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
