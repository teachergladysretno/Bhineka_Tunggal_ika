export type PlayerId = 1 | 2 | 3 | 4;

export interface Player {
  id: PlayerId;
  name: string;
  chickenName: string;
  color: string;
  theme: 'red' | 'blue' | 'purple' | 'green';
  score: number;
  steps: number; // Current position on track (0 to targetSteps)
  correctAnswers: number;
  wrongAnswers: number;
  streak: number;
  lastAction?: 'correct' | 'wrong' | 'remedial';
}

export type QuestionCategory =
  | 'SEJARAH_MAJAPAHIT'
  | 'KARYA_MPU_TANTULAR'
  | 'TOKOH_DAN_PENETAPAN'
  | 'LANDASAN_HUKUM'
  | 'MAKNA_FILOSOFIS'
  | 'PENERAPAN_PELAJAR';

export interface QuizQuestion {
  id: string;
  category: QuestionCategory;
  categoryLabel: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: {
    title: string;
    summary: string;
    historicalContext: string;
    keyTakeaway: string;
    sourceDocument: string;
  };
  remedialQuestion?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export type PlayMode = 'TURN_BASED' | 'BUZZER';

export type GamePhase =
  | 'LOBBY'
  | 'COUNTDOWN'
  | 'QUESTION_ACTIVE'
  | 'BUZZER_WAITING'
  | 'BUZZER_ANSWERING'
  | 'SHOWING_LEARNING_MATERIAL'
  | 'REMEDIAL_ACTIVE'
  | 'CELEBRATING_STEP'
  | 'VICTORY';
