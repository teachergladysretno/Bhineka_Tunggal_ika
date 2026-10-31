import React from 'react';
import { Player, PlayMode } from '../types/game';
import { Users, Trophy, Play, Sparkles, BookOpen, Clock } from 'lucide-react';
import { ChickenSprite } from './ChickenSprite';

interface GameSetupPanelProps {
  players: Player[];
  playerCount: number;
  setPlayerCount: (count: number) => void;
  targetSteps: number;
  setTargetSteps: (steps: number) => void;
  playMode: PlayMode;
  setPlayMode: (mode: PlayMode) => void;
  timerDuration: number;
  setTimerDuration: (seconds: number) => void;
  onUpdatePlayerName: (id: number, name: string) => void;
  onStartGame: () => void;
  onOpenStudyBook: () => void;
  heroImageUrl: string;
}

export const GameSetupPanel: React.FC<GameSetupPanelProps> = ({
  players,
  playerCount,
  setPlayerCount,
  targetSteps,
  setTargetSteps,
  playMode,
  setPlayMode,
  timerDuration,
  setTimerDuration,
  onUpdatePlayerName,
  onStartGame,
  onOpenStudyBook,
  heroImageUrl,
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Hero Welcome Card */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        {/* Decorative background image overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
          <img
            src={heroImageUrl}
            alt="Arena Balapan Indonesia"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-amber-100">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Media Pembelajaran Interaktif SMA Kelas X</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Balap Ayam Bhinneka Tunggal Ika
            </h1>

            <p className="text-sm sm:text-base text-amber-100 max-w-2xl leading-relaxed">
              Jawab kuis materi sejarah, Kitab Kakawin Sutasoma, sidang BPUPKI, hingga pengamalan nilai kebinekaan untuk memajukan karakter ayammu ke garis finish!
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onStartGame}
                className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm sm:text-base transition-all shadow-lg flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Play className="w-5 h-5 fill-white" />
                <span>Mulai Balapan di Papan Interaktif</span>
              </button>

              <button
                onClick={onOpenStudyBook}
                className="px-5 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-bold text-sm transition-all border border-white/20 flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-200" />
                <span>Baca Ringkasan Materi</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-center">
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex flex-col items-center shadow-lg">
              <ChickenSprite theme="red" state="cheering" size="lg" showBadge={false} />
              <span className="text-xs font-bold text-amber-100 mt-2">
                Maskot Si Jago Tantular
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Setup Column 1: Mode & Steps */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
            <Trophy className="w-4 h-4 text-amber-600" />
            <h3>Format Balapan</h3>
          </div>

          {/* Mode Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-600 block">
              Mode Permainan di Papan
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setPlayMode('TURN_BASED')}
                className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                  playMode === 'TURN_BASED'
                    ? 'border-amber-500 bg-amber-50 text-amber-950 ring-2 ring-amber-300'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Giliran Tim
              </button>
              <button
                onClick={() => setPlayMode('BUZZER')}
                className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                  playMode === 'BUZZER'
                    ? 'border-amber-500 bg-amber-50 text-amber-950 ring-2 ring-amber-300'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Rebutan Buzzer
              </button>
            </div>
            <p className="text-[11px] text-slate-500">
              {playMode === 'TURN_BASED'
                ? 'Setiap tim bergantian menjawab pertanyaan satu per satu.'
                : 'Siapa cepat menekan tombol bel di papan berhak menjawab!'}
            </p>
          </div>

          {/* Target Steps */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-600 block">
              Jarak Kemenangan ke Garis Finish
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[3, 5, 7].map((steps) => (
                <button
                  key={steps}
                  onClick={() => setTargetSteps(steps)}
                  className={`py-2 rounded-xl border text-xs font-bold transition-all ${
                    targetSteps === steps
                      ? 'border-orange-500 bg-orange-50 text-orange-950 ring-2 ring-orange-300'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {steps} Langkah
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-500">
              {targetSteps === 3 ? 'Cepat (~5 menit)' : targetSteps === 5 ? 'Standar (~10 menit)' : 'Komprehensif (~15 menit)'}
            </p>
          </div>

          {/* Timer Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-600 block flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>Waktu Berpikir per Soal</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[20, 30, 45].map((sec) => (
                <button
                  key={sec}
                  onClick={() => setTimerDuration(sec)}
                  className={`py-2 rounded-xl border text-xs font-bold transition-all ${
                    timerDuration === sec
                      ? 'border-blue-500 bg-blue-50 text-blue-950 ring-2 ring-blue-300'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {sec} Detik
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Setup Column 2 & 3: Players configuration */}
        <div className="md:col-span-2 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <Users className="w-4 h-4 text-amber-600" />
              <h3>Jumlah & Nama Tim Pemain</h3>
            </div>

            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              {[2, 3, 4].map((cnt) => (
                <button
                  key={cnt}
                  onClick={() => setPlayerCount(cnt)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                    playerCount === cnt
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cnt} Tim
                </button>
              ))}
            </div>
          </div>

          {/* Player Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {players.slice(0, playerCount).map((p) => {
              const borderStyles = {
                red: 'border-red-200 focus-within:border-red-400 bg-red-50/30',
                blue: 'border-sky-200 focus-within:border-sky-400 bg-sky-50/30',
                purple: 'border-purple-200 focus-within:border-purple-400 bg-purple-50/30',
                green: 'border-emerald-200 focus-within:border-emerald-400 bg-emerald-50/30',
              }[p.theme];

              return (
                <div
                  key={p.id}
                  className={`p-3.5 rounded-xl border flex items-center gap-3 transition-colors ${borderStyles}`}
                >
                  <ChickenSprite theme={p.theme} size="sm" playerNumber={p.id} />
                  <div className="flex-1 min-w-0">
                    <label className="text-[11px] font-semibold text-slate-500 block truncate">
                      Pemain {p.id} ({p.chickenName})
                    </label>
                    <input
                      type="text"
                      value={p.name}
                      maxLength={24}
                      onChange={(e) => onUpdatePlayerName(p.id, e.target.value)}
                      className="w-full font-bold text-sm text-slate-900 bg-transparent border-b border-slate-300 focus:border-amber-500 focus:outline-hidden py-0.5"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
            <span>
              💡 <strong>Tips Papan Interaktif:</strong> Gunakan stylus atau sentuhan jari langsung di depan kelas untuk memilih jawaban kuis!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
