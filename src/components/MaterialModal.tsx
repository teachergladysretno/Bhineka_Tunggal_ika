import React, { useState } from 'react';
import { QuizQuestion, Player } from '../types/game';
import { BookOpen, AlertCircle, CheckCircle2, ArrowRight, RotateCcw, Lightbulb, Sparkles } from 'lucide-react';
import { ChickenSprite } from './ChickenSprite';
import { sounds } from '../utils/audio';

interface MaterialModalProps {
  question: QuizQuestion;
  wrongPlayer: Player;
  wrongSelectedIndex: number | null;
  onRemedialSuccess: () => void;
  onDismiss: () => void;
}

export const MaterialModal: React.FC<MaterialModalProps> = ({
  question,
  wrongPlayer,
  wrongSelectedIndex,
  onRemedialSuccess,
  onDismiss,
}) => {
  const [showRemedialQuiz, setShowRemedialQuiz] = useState(false);
  const [remedialSelected, setRemedialSelected] = useState<number | null>(null);
  const [remedialAnswered, setRemedialAnswered] = useState(false);
  const [isRemedialCorrect, setIsRemedialCorrect] = useState(false);

  const remedial = question.remedialQuestion;

  const handleRemedialAnswer = (optionIdx: number) => {
    if (remedialAnswered || !remedial) return;
    setRemedialSelected(optionIdx);
    setRemedialAnswered(true);

    const correct = optionIdx === remedial.correctIndex;
    setIsRemedialCorrect(correct);

    if (correct) {
      sounds.playCorrect();
    } else {
      sounds.playWrong();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-amber-200 shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-amber-200 uppercase tracking-wider block">
                Materi Remedi & Pembelajaran
              </span>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                {wrongPlayer.name}, Pelajari Materi Ini Dulu Yuk!
              </h2>
            </div>
          </div>
          <div className="hidden sm:block">
            <ChickenSprite theme={wrongPlayer.theme} state="sad" size="sm" showBadge={false} />
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Wrong Answer Notice */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-3.5 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-red-900 leading-relaxed">
              <p className="font-semibold mb-1">
                Jawaban sebelumnya belum tepat:
              </p>
              <p className="text-red-700 italic">
                "{wrongSelectedIndex !== null ? question.options[wrongSelectedIndex] : 'Jawaban belum benar'}"
              </p>
              <p className="mt-1 font-medium text-slate-700">
                Jawaban yang benar adalah:{' '}
                <span className="text-emerald-700 font-bold">
                  {question.options[question.correctIndex]}
                </span>
              </p>
            </div>
          </div>

          {!showRemedialQuiz ? (
            /* Material Review Section */
            <div className="space-y-4">
              <div className="bg-amber-50/70 border border-amber-200/90 rounded-xl p-4">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-2">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <h3>{question.explanation.title}</h3>
                </div>
                <p className="text-slate-800 text-sm leading-relaxed mb-3">
                  {question.explanation.summary}
                </p>
                <div className="bg-white/80 rounded-lg p-3 border border-amber-200 text-xs text-slate-700 space-y-2">
                  <p>
                    <strong className="text-slate-900">Konteks Sejarah:</strong> {question.explanation.historicalContext}
                  </p>
                  <p className="text-amber-900 font-semibold">
                    <strong className="text-slate-900">Kunci Pemahaman:</strong> {question.explanation.keyTakeaway}
                  </p>
                </div>
                <div className="mt-2.5 text-[11px] text-slate-500 font-medium">
                  Sumber Kurikulum: {question.explanation.sourceDocument}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  onClick={onDismiss}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors order-2 sm:order-1"
                >
                  Lewati ke Giliran Berikutnya
                </button>

                {remedial && (
                  <button
                    onClick={() => {
                      sounds.playChickenStep();
                      setShowRemedialQuiz(true);
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 order-1 sm:order-2 active:scale-95"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Coba Soal Remedial Sekarang!</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Interactive Remedial Challenge */
            remedial && (
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-sm mb-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span>Uji Pemahaman Ulang (Remedial)</span>
                  </div>
                  <p className="text-slate-800 text-sm font-semibold mb-3">
                    {remedial.question}
                  </p>

                  <div className="space-y-2">
                    {remedial.options.map((option, idx) => {
                      const isSelected = remedialSelected === idx;
                      const isCorrect = idx === remedial.correctIndex;

                      let btnStyle = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800';
                      if (remedialAnswered) {
                        if (isCorrect) {
                          btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                        } else if (isSelected) {
                          btnStyle = 'border-red-400 bg-red-50 text-red-900';
                        } else {
                          btnStyle = 'border-slate-200 bg-slate-50 text-slate-400';
                        }
                      }

                      return (
                        <button
                          key={idx}
                          disabled={remedialAnswered}
                          onClick={() => handleRemedialAnswer(idx)}
                          className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-700 shrink-0">
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span>{option}</span>
                          </div>
                          {remedialAnswered && isCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {remedialAnswered && (
                    <div className="mt-4 p-3 rounded-lg bg-white border border-blue-200 text-xs text-slate-700">
                      <p className="font-bold text-slate-900 mb-1">
                        {isRemedialCorrect ? '🎉 Luar Biasa! Pemahamanmu sudah tepat.' : 'Tetap semangat!'}
                      </p>
                      <p>{remedial.explanation}</p>
                    </div>
                  )}
                </div>

                {/* Post Remedial Actions */}
                <div className="flex justify-end gap-3 pt-2">
                  {remedialAnswered && (
                    <button
                      onClick={() => {
                        if (isRemedialCorrect) {
                          onRemedialSuccess();
                        } else {
                          onDismiss();
                        }
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow"
                    >
                      <span>
                        {isRemedialCorrect ? 'Lanjut Balapan (+Bonus Semangat)' : 'Lanjut ke Giliran Berikutnya'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
