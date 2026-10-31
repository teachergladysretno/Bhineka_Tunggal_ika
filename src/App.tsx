import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Player, QuizQuestion, PlayMode, GamePhase } from './types/game';
import { QUIZ_QUESTIONS } from './data/quizQuestions';
import { TopNav } from './components/TopNav';
import { RaceTrack } from './components/RaceTrack';
import { QuizCard } from './components/QuizCard';
import { BuzzerPanel } from './components/BuzzerPanel';
import { MaterialModal } from './components/MaterialModal';
import { VictoryPodium } from './components/VictoryPodium';
import { StudyBookModal } from './components/StudyBookModal';
import { RulesModal } from './components/RulesModal';
import { GameSetupPanel } from './components/GameSetupPanel';
import { sounds } from './utils/audio';
import { RotateCcw, Volume2, VolumeX, Sparkles, AlertCircle } from 'lucide-react';

const INITIAL_PLAYERS: Player[] = [
  {
    id: 1,
    name: 'Tim Merah',
    chickenName: 'Si Jago Tantular',
    color: '#EA580C',
    theme: 'red',
    score: 0,
    steps: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    streak: 0,
  },
  {
    id: 2,
    name: 'Tim Biru',
    chickenName: 'Si Jalak Majapahit',
    color: '#0284C7',
    theme: 'blue',
    score: 0,
    steps: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    streak: 0,
  },
  {
    id: 3,
    name: 'Tim Ungu',
    chickenName: 'Si Pendekar Sutasoma',
    color: '#7C3AED',
    theme: 'purple',
    score: 0,
    steps: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    streak: 0,
  },
  {
    id: 4,
    name: 'Tim Hijau',
    chickenName: 'Si Ksatria Nusantara',
    color: '#059669',
    theme: 'green',
    score: 0,
    steps: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    streak: 0,
  },
];

export default function App() {
  // Game Setup State
  const [players, setPlayers] = useState<Player[]>(INITIAL_PLAYERS);
  const [playerCount, setPlayerCount] = useState<number>(4);
  const [targetSteps, setTargetSteps] = useState<number>(5);
  const [playMode, setPlayMode] = useState<PlayMode>('TURN_BASED');
  const [timerDuration, setTimerDuration] = useState<number>(30);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Active Game State
  const [gamePhase, setGamePhase] = useState<GamePhase>('LOBBY');
  const [activePlayerIndex, setActivePlayerIndex] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>(QUIZ_QUESTIONS);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isQuestionLocked, setIsQuestionLocked] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(timerDuration);

  // Buzzer State
  const [buzzedPlayerId, setBuzzedPlayerId] = useState<number | null>(null);

  // Learning / Remedial State
  const [wrongPlayer, setWrongPlayer] = useState<Player | null>(null);
  const [wrongSelectedIndex, setWrongSelectedIndex] = useState<number | null>(null);

  // UI Modals
  const [isStudyBookOpen, setIsStudyBookOpen] = useState<boolean>(false);
  const [isRulesOpen, setIsRulesOpen] = useState<boolean>(false);
  const [activeNavTab, setActiveNavTab] = useState<'arena' | 'book' | 'rules'>('arena');

  // Countdown timer ref
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activePlayers = players.slice(0, playerCount);
  const currentQuestion = shuffledQuestions[currentQuestionIndex % shuffledQuestions.length];
  const activePlayer = activePlayers[activePlayerIndex % activePlayers.length];

  // Sound toggle handler
  const handleToggleMute = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  // Update Player Name
  const handleUpdatePlayerName = (id: number, name: string) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, name: name } : p))
    );
  };

  // Shuffle Questions Utility
  const shuffleDeck = () => {
    const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
  };

  // Start Game
  const handleStartGame = () => {
    shuffleDeck();
    setPlayers((prev) =>
      prev.map((p) => ({
        ...p,
        score: 0,
        steps: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        streak: 0,
        lastAction: undefined,
      }))
    );
    setActivePlayerIndex(0);
    setSelectedOption(null);
    setIsQuestionLocked(false);
    setTimeLeft(timerDuration);
    setBuzzedPlayerId(null);
    setWrongPlayer(null);

    sounds.playChickenStep();

    if (playMode === 'BUZZER') {
      setGamePhase('BUZZER_WAITING');
    } else {
      setGamePhase('QUESTION_ACTIVE');
    }
  };

  // Reset Game to Lobby
  const handleResetToLobby = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setGamePhase('LOBBY');
    setSelectedOption(null);
    setIsQuestionLocked(false);
    setBuzzedPlayerId(null);
    setWrongPlayer(null);
  };

  // Timer Countdown Effect
  useEffect(() => {
    if (gamePhase !== 'QUESTION_ACTIVE' && gamePhase !== 'BUZZER_ANSWERING') {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleTimeExpired();
          return 0;
        }
        if (prev <= 4) {
          sounds.playCountdown(prev === 1);
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gamePhase, currentQuestionIndex, activePlayerIndex, buzzedPlayerId]);

  // Handle Timeout
  const handleTimeExpired = useCallback(() => {
    if (isQuestionLocked) return;
    setIsQuestionLocked(true);
    sounds.playWrong();

    const answeringPlayer =
      playMode === 'BUZZER' && buzzedPlayerId
        ? activePlayers.find((p) => p.id === buzzedPlayerId) || activePlayer
        : activePlayer;

    // Record wrong answer
    setPlayers((prev) =>
      prev.map((p) =>
        p.id === answeringPlayer.id
          ? {
              ...p,
              wrongAnswers: p.wrongAnswers + 1,
              streak: 0,
              lastAction: 'wrong',
            }
          : p
      )
    );

    setWrongPlayer(answeringPlayer);
    setWrongSelectedIndex(null);
    setGamePhase('SHOWING_LEARNING_MATERIAL');
  }, [isQuestionLocked, playMode, buzzedPlayerId, activePlayers, activePlayer]);

  // Buzzer Hit
  const handleBuzzerPress = (playerId: number) => {
    if (gamePhase !== 'BUZZER_WAITING' || buzzedPlayerId !== null) return;
    sounds.playBuzzer();
    setBuzzedPlayerId(playerId);
    setTimeLeft(15); // 15 seconds to answer after pressing buzzer
    setGamePhase('BUZZER_ANSWERING');
  };

  // Answer Selected
  const handleSelectAnswer = (optionIdx: number) => {
    if (isQuestionLocked) return;
    setIsQuestionLocked(true);
    setSelectedOption(optionIdx);

    const answeringPlayer =
      playMode === 'BUZZER' && buzzedPlayerId
        ? activePlayers.find((p) => p.id === buzzedPlayerId) || activePlayer
        : activePlayer;

    const isCorrect = optionIdx === currentQuestion.correctIndex;

    if (isCorrect) {
      // Correct!
      sounds.playCorrect();
      sounds.playChickenStep();

      const newSteps = answeringPlayer.steps + 1;
      const pointEarned = 100 + answeringPlayer.streak * 20;

      setPlayers((prev) =>
        prev.map((p) =>
          p.id === answeringPlayer.id
            ? {
                ...p,
                steps: newSteps,
                score: p.score + pointEarned,
                correctAnswers: p.correctAnswers + 1,
                streak: p.streak + 1,
                lastAction: 'correct',
              }
            : p
        )
      );

      // Check for victory
      if (newSteps >= targetSteps) {
        setTimeout(() => {
          setGamePhase('VICTORY');
        }, 1200);
      } else {
        // Next question delay
        setTimeout(() => {
          advanceToNextTurn();
        }, 1400);
      }
    } else {
      // Wrong Answer!
      sounds.playWrong();

      setPlayers((prev) =>
        prev.map((p) =>
          p.id === answeringPlayer.id
            ? {
                ...p,
                wrongAnswers: p.wrongAnswers + 1,
                streak: 0,
                lastAction: 'wrong',
              }
            : p
        )
      );

      setWrongPlayer(answeringPlayer);
      setWrongSelectedIndex(optionIdx);

      // Open learning modal after a brief pause
      setTimeout(() => {
        setGamePhase('SHOWING_LEARNING_MATERIAL');
      }, 900);
    }
  };

  // Advance to next turn / question
  const advanceToNextTurn = () => {
    setSelectedOption(null);
    setIsQuestionLocked(false);
    setTimeLeft(timerDuration);
    setBuzzedPlayerId(null);
    setWrongPlayer(null);
    setWrongSelectedIndex(null);

    setCurrentQuestionIndex((prev) => prev + 1);
    setActivePlayerIndex((prev) => (prev + 1) % playerCount);

    if (playMode === 'BUZZER') {
      setGamePhase('BUZZER_WAITING');
    } else {
      setGamePhase('QUESTION_ACTIVE');
    }
  };

  // Remedial Success Callback
  const handleRemedialSuccess = () => {
    if (wrongPlayer) {
      setPlayers((prev) =>
        prev.map((p) =>
          p.id === wrongPlayer.id
            ? {
                ...p,
                score: p.score + 25, // Encouragement bonus for studying!
                lastAction: 'remedial',
              }
            : p
        )
      );
    }
    advanceToNextTurn();
  };

  const heroBg = '/src/assets/images/race_track_nusantara_1793441024406.jpg';

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/40 text-slate-900">
      {/* Strict 3-Zone Top Navigation */}
      <TopNav
        onOpenStudyBook={() => setIsStudyBookOpen(true)}
        onOpenRules={() => setIsRulesOpen(true)}
        onResetGame={handleResetToLobby}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        activeTab={activeNavTab}
        setActiveTab={(tab) => {
          setActiveNavTab(tab);
          if (tab === 'book') setIsStudyBookOpen(true);
          if (tab === 'rules') setIsRulesOpen(true);
        }}
      />

      {/* Main Game Stage */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {gamePhase === 'LOBBY' ? (
          /* Lobby Configuration View */
          <GameSetupPanel
            players={players}
            playerCount={playerCount}
            setPlayerCount={setPlayerCount}
            targetSteps={targetSteps}
            setTargetSteps={setTargetSteps}
            playMode={playMode}
            setPlayMode={setPlayMode}
            timerDuration={timerDuration}
            setTimerDuration={setTimerDuration}
            onUpdatePlayerName={handleUpdatePlayerName}
            onStartGame={handleStartGame}
            onOpenStudyBook={() => setIsStudyBookOpen(true)}
            heroImageUrl={heroBg}
          />
        ) : (
          /* Active Playing Arena */
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Quick Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white px-4 py-2.5 rounded-xl border border-amber-200/80 shadow-xs text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-800">
                  Soal ke-{currentQuestionIndex + 1}
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-amber-800 font-semibold">
                  Mode: {playMode === 'TURN_BASED' ? 'Giliran Tim' : 'Rebutan Buzzer'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsStudyBookOpen(true)}
                  className="text-amber-700 hover:text-amber-900 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  📖 Buku Saku
                </button>
                <span className="text-slate-300">|</span>
                <button
                  onClick={handleResetToLobby}
                  className="text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Atur Ulang
                </button>
              </div>
            </div>

            {/* Race Track Canvas */}
            <RaceTrack
              players={activePlayers}
              activePlayerId={
                playMode === 'BUZZER' ? buzzedPlayerId : activePlayer.id
              }
              targetSteps={targetSteps}
              isRacing={selectedOption !== null && selectedOption === currentQuestion.correctIndex}
            />

            {/* Buzzer Mode Active Control */}
            {playMode === 'BUZZER' && gamePhase === 'BUZZER_WAITING' && (
              <BuzzerPanel
                players={activePlayers}
                buzzedPlayerId={buzzedPlayerId}
                onPressBuzzer={handleBuzzerPress}
              />
            )}

            {/* Question Card (Active in Turn-Based or when Buzzer is triggered) */}
            {(gamePhase === 'QUESTION_ACTIVE' || gamePhase === 'BUZZER_ANSWERING') && (
              <QuizCard
                question={currentQuestion}
                activePlayer={
                  playMode === 'BUZZER' && buzzedPlayerId
                    ? activePlayers.find((p) => p.id === buzzedPlayerId) || activePlayer
                    : activePlayer
                }
                onSelectAnswer={handleSelectAnswer}
                isLocked={isQuestionLocked}
                selectedOption={selectedOption}
                timeLeft={timeLeft}
                totalTime={playMode === 'BUZZER' ? 15 : timerDuration}
                onTimeout={handleTimeExpired}
              />
            )}
          </div>
        )}
      </main>

      {/* Educational Learning & Remedial Modal ("jika salah, game memunculkan materi pembelajaran untuk dicoba lagi") */}
      {gamePhase === 'SHOWING_LEARNING_MATERIAL' && wrongPlayer && (
        <MaterialModal
          question={currentQuestion}
          wrongPlayer={wrongPlayer}
          wrongSelectedIndex={wrongSelectedIndex}
          onRemedialSuccess={handleRemedialSuccess}
          onDismiss={advanceToNextTurn}
        />
      )}

      {/* Victory Celebration Podium */}
      {gamePhase === 'VICTORY' && (
        <VictoryPodium
          players={activePlayers}
          onRestart={handleStartGame}
          onOpenStudyBook={() => {
            setIsStudyBookOpen(true);
          }}
        />
      )}

      {/* Study Reference Handbook Modal */}
      {isStudyBookOpen && (
        <StudyBookModal onClose={() => setIsStudyBookOpen(false)} />
      )}

      {/* Rules & Guide Modal */}
      {isRulesOpen && <RulesModal onClose={() => setIsRulesOpen(false)} />}
    </div>
  );
}
