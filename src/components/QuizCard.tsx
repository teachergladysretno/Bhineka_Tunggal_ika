import React, { useEffect, useState } from 'react';
import { QuizQuestion, Player } from '../types/game';
import { Timer, HelpCircle, Check, X } from 'lucide-react';
import { ChickenSprite } from './ChickenSprite';

interface QuizCardProps {
  question: QuizQuestion;
  activePlayer: Player;
  onSelectAnswer: (optionIdx: number) => void;
  isLocked: boolean;
  selectedOption: number | null;
  timeLeft: number;
  totalTime: number;
  onTimeout?: () => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  activePlayer,
  onSelectAnswer,
  isLocked,
  selectedOption,
  timeLeft,
  totalTime,
}) => {
  const [animatedOptions, setAnimatedOptions] = useState(false);

  useEffect(() => {
    setAnimatedOptions(false);
    const timer = setTimeout(() => setAnimatedOptions(true), 50);
    return () => clearTimeout(timer);
  }, [question.id]);

  const progressPercent = (timeLeft / totalTime) * 100;

  const playerThemeStyles = {
    red: {
      badge: 'bg-red-500 text-white',
      border: 'border-red-400',
      activeRing: 'ring-red-300',
      text: 'text-red-700',
    },
    blue: {
      badge: 'bg-sky-500 text-white',
      border: 'border-sky-400',
      activeRing: 'ring-sky-300',
      text: 'text-sky-700',
    },
    purple: {
      badge: 'bg-purple-500 text-white',
      border: 'border-purple-400',
      activeRing: 'ring-purple-300',
      text: 'text-purple-700',
    },
    green: {
      badge: 'bg-emerald-500 text-white',
      border: 'border-emerald-400',
      activeRing: 'ring-emerald-300',
      text: 'text-emerald-700',
    },
  }[activePlayer.theme];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
      {/* Top Header: Active Player Banner & Timer Bar */}
      <div className="bg-slate-900 text-white p-3.5 sm:p-4 flex flex-wrap items-center justify-between gap-3">
        {/* Turn info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center p-0.5">
            <ChickenSprite theme={activePlayer.theme} state="idle" size="sm" showBadge={false} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${playerThemeStyles.badge}`}>
                Pemain {activePlayer.id}
              </span>
              <span className="text-xs text-slate-300">
                Kategori: <strong className="text-amber-300">{question.categoryLabel}</strong>
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white">
              Giliran {activePlayer.name} ({activePlayer.chickenName})
            </h3>
          </div>
        </div>

        {/* Timer */}
        <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 text-xs font-semibold tabular-nums">
          <Timer className={`w-4 h-4 ${timeLeft <= 5 ? 'text-red-400 animate-pulse' : 'text-amber-400'}`} />
          <span>Waktu:</span>
          <span className={`font-bold ${timeLeft <= 5 ? 'text-red-400' : 'text-white'}`}>
            {timeLeft}s
          </span>
        </div>
      </div>

      {/* Timer Progress Indicator Line */}
      <div className="w-full h-1.5 bg-slate-100 overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ease-linear ${
            timeLeft <= 5 ? 'bg-red-500' : timeLeft <= 10 ? 'bg-amber-500' : 'bg-emerald-500'
          }`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Question & Big Touch Buttons */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* Question Text */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Pertanyaan Uji Kompetensi Kelas X</span>
          </div>
          <h2 className="text-base sm:text-xl font-bold text-slate-900 leading-snug">
            {question.question}
          </h2>
        </div>

        {/* 4 Interactive Touch Options for Whiteboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {question.options.map((option, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const isSelected = selectedOption === idx;
            const isCorrect = idx === question.correctIndex;

            let cardStyles =
              'border-slate-200 bg-slate-50/70 hover:bg-amber-50/70 hover:border-amber-300 text-slate-800 active:scale-[0.98]';
            let badgeStyles = 'bg-white border-slate-300 text-slate-700 shadow-sm';

            if (selectedOption !== null) {
              if (isSelected) {
                if (isCorrect) {
                  cardStyles = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-400 shadow-sm';
                  badgeStyles = 'bg-emerald-600 text-white border-emerald-600';
                } else {
                  cardStyles = 'border-red-500 bg-red-50 text-red-950 ring-2 ring-red-400 shadow-sm';
                  badgeStyles = 'bg-red-600 text-white border-red-600';
                }
              } else if (isCorrect) {
                // Highlight correct answer if wrong answer was picked
                cardStyles = 'border-emerald-400 bg-emerald-50/70 text-emerald-900 font-semibold';
                badgeStyles = 'bg-emerald-500 text-white border-emerald-500';
              } else {
                cardStyles = 'border-slate-200 bg-white/50 text-slate-400 opacity-60';
                badgeStyles = 'bg-slate-100 border-slate-200 text-slate-400';
              }
            }

            return (
              <button
                key={idx}
                disabled={isLocked}
                onClick={() => onSelectAnswer(idx)}
                className={`w-full min-h-[64px] sm:min-h-[72px] p-3 sm:p-4 rounded-xl border-2 text-left transition-all duration-150 flex items-center justify-between gap-3 text-sm sm:text-base font-medium cursor-pointer ${cardStyles} ${
                  animatedOptions ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{
                  transitionDelay: `${idx * 40}ms`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-lg border font-bold text-sm flex items-center justify-center shrink-0 transition-colors ${badgeStyles}`}
                  >
                    {letter}
                  </span>
                  <span className="leading-snug">{option}</span>
                </div>

                {/* Status Indicator Icon */}
                {selectedOption !== null && (
                  <div className="shrink-0">
                    {isSelected && isCorrect && (
                      <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    )}
                    {isSelected && !isCorrect && (
                      <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center">
                        <X className="w-4 h-4 stroke-[3]" />
                      </div>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
