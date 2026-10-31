import React, { useState } from 'react';
import { STUDY_MODULES, StudyModule } from '../data/studyMaterials';
import { X, BookOpen, Scroll, Feather, Scale, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface StudyBookModalProps {
  onClose: () => void;
}

export const StudyBookModal: React.FC<StudyBookModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<string>(STUDY_MODULES[0].id);

  const activeModule = STUDY_MODULES.find((m) => m.id === activeTab) || STUDY_MODULES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scroll':
        return <Scroll className="w-4 h-4" />;
      case 'Feather':
        return <Feather className="w-4 h-4" />;
      case 'Scale':
        return <Scale className="w-4 h-4" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden my-auto flex flex-col max-h-[88vh]">
        {/* Top Header */}
        <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                Buku Saku Pembelajaran SMA Kelas X
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Materi Lengkap: Asal Mula & Makna Bhinneka Tunggal Ika
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs for Modules */}
        <div className="flex items-center gap-1.5 p-2 bg-slate-100 border-b border-slate-200 overflow-x-auto shrink-0 scrollbar-none">
          {STUDY_MODULES.map((mod) => {
            const isActive = mod.id === activeTab;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveTab(mod.id)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 flex items-center gap-2 transition-all ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {getIcon(mod.icon)}
                <span>{mod.title}</span>
              </button>
            );
          })}
        </div>

        {/* Module Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              {activeModule.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {activeModule.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {activeModule.points.map((point, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-amber-50/30 space-y-2"
              >
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <h4>{point.heading}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-6">
                  {point.description}
                </p>
                {point.factHighlight && (
                  <div className="ml-6 p-2.5 rounded-lg bg-amber-100/70 border border-amber-200 text-xs text-amber-900 font-medium">
                    💡 <strong>Fakta Kunci:</strong> {point.factHighlight}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <p className="text-xs text-slate-500">
            Materi disesuaikan dengan Kurikulum Merdeka Pendidikan Pancasila SMA Kelas X
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Tutup Buku Saku
          </button>
        </div>
      </div>
    </div>
  );
};
