import React from 'react';
import { Volume2, VolumeX, RotateCcw } from 'lucide-react';

interface TopNavProps {
  onOpenStudyBook: () => void;
  onOpenRules: () => void;
  onResetGame: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  activeTab: 'arena' | 'book' | 'rules';
  setActiveTab: (tab: 'arena' | 'book' | 'rules') => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  onOpenStudyBook,
  onOpenRules,
  onResetGame,
  isMuted,
  onToggleMute,
  activeTab,
  setActiveTab,
}) => {
  return (
    <header className="flex items-center justify-between gap-8 px-5 py-3.5 bg-white border-b border-amber-200/80 sticky top-0 z-40 shadow-xs">
      {/* Zone 1: Brand wordmark (single text element, whitespace-nowrap shrink-0) */}
      <div className="flex items-center gap-2.5 whitespace-nowrap shrink-0">
        <span className="text-xl">🐔</span>
        <button
          onClick={() => setActiveTab('arena')}
          className="text-lg font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-amber-600 transition-colors cursor-pointer text-left"
        >
          Balap Ayam Bhinneka
        </button>
      </div>

      {/* Zone 2: 4 concise single-line nav items */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
        <button
          onClick={() => setActiveTab('arena')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
            activeTab === 'arena' ? 'text-amber-600 font-bold' : ''
          }`}
        >
          Arena Balapan
        </button>
        <button
          onClick={() => onOpenStudyBook()}
          className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Buku Saku
        </button>
        <button
          onClick={() => onOpenRules()}
          className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Panduan Guru
        </button>
        <button
          onClick={onToggleMute}
          className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 text-xs text-slate-500"
          title="Toggle Suara"
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
          <span>{isMuted ? 'Mute' : 'Audio On'}</span>
        </button>
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onResetGame}
          className="px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-sm flex items-center gap-1.5 whitespace-nowrap shrink-0 active:scale-95"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Mulai Balapan Baru</span>
        </button>
      </div>
    </header>
  );
};
