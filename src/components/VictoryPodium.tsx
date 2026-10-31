import React, { useEffect, useRef } from 'react';
import { Player } from '../types/game';
import { Trophy, Medal, RotateCcw, BookOpen, Award } from 'lucide-react';
import { ChickenSprite } from './ChickenSprite';
import { sounds } from '../utils/audio';

interface VictoryPodiumProps {
  players: Player[];
  onRestart: () => void;
  onOpenStudyBook: () => void;
}

export const VictoryPodium: React.FC<VictoryPodiumProps> = ({
  players,
  onRestart,
  onOpenStudyBook,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Sort players by steps descending, then score descending
  const sortedPlayers = [...players].sort((a, b) => {
    if (b.steps !== a.steps) return b.steps - a.steps;
    return b.score - a.score;
  });

  const winner = sortedPlayers[0];

  useEffect(() => {
    sounds.playVictoryFanfare();

    // High performance particle confetti canvas
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899'];
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
      rot: number;
      rotSpeed: number;
    }[] = [];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 300,
        y: canvas.height * 0.4,
        vx: (Math.random() - 0.5) * 14,
        vy: -Math.random() * 14 - 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.rot += p.rotSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      <div className="bg-white rounded-3xl max-w-2xl w-full border border-amber-200 shadow-2xl overflow-hidden relative z-10 my-auto text-slate-900 animate-in fade-in zoom-in-95 duration-300">
        {/* Victory Header */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white p-6 text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold mb-2">
            <Trophy className="w-4 h-4 text-yellow-300" />
            <span>Selamat! Balapan Selesai</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Juara Balapan Ayam Bhinneka!
          </h2>
          <p className="text-sm text-amber-100 mt-1">
            {winner.name} ({winner.chickenName}) berhasil mencapai garis finish pertama!
          </p>

          <div className="mt-4 flex justify-center">
            <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 inline-block shadow-inner">
              <ChickenSprite theme={winner.theme} state="cheering" size="lg" playerNumber={winner.id} />
            </div>
          </div>
        </div>

        {/* Podium Standings */}
        <div className="p-6 space-y-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center">
            Klasemen Akhir Pemain
          </h3>

          <div className="space-y-2.5">
            {sortedPlayers.map((player, idx) => {
              const rank = idx + 1;
              const medalColors = {
                1: 'text-amber-500 bg-amber-50 border-amber-300',
                2: 'text-slate-400 bg-slate-50 border-slate-300',
                3: 'text-amber-700 bg-amber-50/50 border-amber-200',
                4: 'text-slate-500 bg-slate-50 border-slate-200',
              }[rank];

              return (
                <div
                  key={player.id}
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                    rank === 1
                      ? 'bg-amber-50/80 border-amber-300 shadow-sm'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg border font-extrabold text-sm flex items-center justify-center shrink-0 ${medalColors}`}
                    >
                      {rank === 1 ? <Trophy className="w-4 h-4" /> : rank}
                    </div>

                    <div className="flex items-center gap-2">
                      <ChickenSprite theme={player.theme} state="idle" size="sm" showBadge={false} />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-sm sm:text-base text-slate-900">
                            {player.name}
                          </span>
                          <span className="text-xs text-slate-500">
                            · {player.chickenName}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          {player.correctAnswers} Jawaban Benar · {player.wrongAnswers} Remedi
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-base font-extrabold text-slate-900 tabular-nums">
                      {player.score}
                    </span>
                    <span className="text-xs text-slate-500 ml-1">Poin</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-200">
            <button
              onClick={onOpenStudyBook}
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span>Buku Saku Materi Bhinneka</span>
            </button>

            <button
              onClick={onRestart}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Main Lagi Bersama Kelas</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
