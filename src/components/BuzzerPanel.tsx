import React from 'react';
import { Player } from '../types/game';
import { Bell } from 'lucide-react';
import { ChickenSprite } from './ChickenSprite';

interface BuzzerPanelProps {
  players: Player[];
  buzzedPlayerId: number | null;
  onPressBuzzer: (playerId: number) => void;
  disabled?: boolean;
}

export const BuzzerPanel: React.FC<BuzzerPanelProps> = ({
  players,
  buzzedPlayerId,
  onPressBuzzer,
  disabled = false,
}) => {
  return (
    <div className="w-full bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-800 text-white shadow-lg">
      <div className="text-center mb-4">
        <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
          Papan Interaktif · Mode Rebutan Buzzer
        </span>
        <h3 className="text-base sm:text-lg font-bold text-white">
          {buzzedPlayerId
            ? `🔔 Pemain ${buzzedPlayerId} Menekan Buzzer Tercepat! Segera Pilih Jawaban!`
            : 'Siap-siap! Siapa cepat menekan tombol bel berhak menjawab!'}
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {players.map((player) => {
          const isBuzzed = buzzedPlayerId === player.id;
          const isOtherBuzzed = buzzedPlayerId !== null && !isBuzzed;

          const themeStyles = {
            red: {
              active: 'bg-red-600 hover:bg-red-500 ring-4 ring-red-300 shadow-red-600/50',
              normal: 'bg-gradient-to-b from-red-600 to-red-700 hover:from-red-500 hover:to-red-600',
              text: 'text-red-100',
            },
            blue: {
              active: 'bg-sky-600 hover:bg-sky-500 ring-4 ring-sky-300 shadow-sky-600/50',
              normal: 'bg-gradient-to-b from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600',
              text: 'text-sky-100',
            },
            purple: {
              active: 'bg-purple-600 hover:bg-purple-500 ring-4 ring-purple-300 shadow-purple-600/50',
              normal: 'bg-gradient-to-b from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600',
              text: 'text-purple-100',
            },
            green: {
              active: 'bg-emerald-600 hover:bg-emerald-500 ring-4 ring-emerald-300 shadow-emerald-600/50',
              normal: 'bg-gradient-to-b from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600',
              text: 'text-emerald-100',
            },
          }[player.theme];

          return (
            <button
              key={player.id}
              disabled={disabled || isOtherBuzzed}
              onClick={() => onPressBuzzer(player.id)}
              className={`min-h-[110px] sm:min-h-[130px] rounded-2xl p-4 flex flex-col items-center justify-center gap-2 border-2 border-white/20 transition-all duration-150 active:scale-95 shadow-lg select-none cursor-pointer ${
                isBuzzed
                  ? `${themeStyles.active} animate-pulse scale-105`
                  : isOtherBuzzed
                  ? 'opacity-40 bg-slate-800 border-slate-700 cursor-not-allowed'
                  : `${themeStyles.normal}`
              }`}
            >
              <div className="flex items-center gap-2">
                <Bell className={`w-5 h-5 ${isBuzzed ? 'animate-bounce text-yellow-300' : 'text-white'}`} />
                <span className="font-extrabold text-sm sm:text-base tracking-wide">
                  BEL {player.id}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <ChickenSprite
                  theme={player.theme}
                  state={isBuzzed ? 'cheering' : 'idle'}
                  size="sm"
                  showBadge={false}
                />
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                    {player.name}
                  </p>
                  <p className={`text-[10px] ${themeStyles.text}`}>
                    {player.chickenName}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
