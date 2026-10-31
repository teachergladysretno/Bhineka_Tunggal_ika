import React from 'react';
import { X, Trophy, Users, Lightbulb, Bell, BookOpen } from 'lucide-react';

interface RulesModalProps {
  onClose: () => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden my-auto max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              ?
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                Panduan Guru & Siswa
              </span>
              <h2 className="text-base sm:text-lg font-bold">
                Cara Bermain Balap Ayam di Papan Interaktif
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

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-slate-800 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/50 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <Users className="w-4 h-4 text-amber-600" />
                <h3>Bisa Dimainkan 4 Pemain/Tim</h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Dirancang khusus untuk layar sentuh interaktif (Smartboard / IFP). Siswa dapat dibagi menjadi 4 tim mewakili Ayam Merah, Biru, Ungu, dan Hijau.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
                <Trophy className="w-4 h-4 text-emerald-600" />
                <h3>Jawaban Benar = Bergerak Maju</h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Setiap tim yang memilih opsi benar membuat karakter ayamnya berlari 1 langkah ke depan menuju garis finish.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/50 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-rose-900 text-sm">
                <Lightbulb className="w-4 h-4 text-rose-600" />
                <h3>Salah = Materi Remedi Edukatif</h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Jika jawaban salah, layar menampilkan penjelasan sejarah lengkap dan soal tantangan remedial untuk dipelajari kembali!
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-sky-200 bg-sky-50/50 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-sky-900 text-sm">
                <Bell className="w-4 h-4 text-sky-600" />
                <h3>Mode Giliran vs Mode Rebutan</h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Guru dapat memilih mode santai bergiliran (turn-based) atau mode seru rebutan tombol bel (fast buzzer) di depan kelas.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-600" />
              Cakupan Materi Kelas X (Kurikulum Merdeka)
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Kitab Kakawin Sutasoma pupuh 139 bait 5 karya Mpu Tantular (Abad ke-14 Majapahit).</li>
              <li>Perumusan semboyan oleh Mohammad Yamin, Ir. Soekarno, dan perancangan lambang Garuda oleh Sultan Hamid II.</li>
              <li>Landasan konstitusional Pasal 36A UUD 1945 dan payung hukum UU No. 24 Tahun 2009.</li>
              <li>Penerapan nyata anti-diskriminasi SARA dan literasi siber bagi pelajar SMA.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 bg-slate-100 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
          >
            Mengerti & Siap Bermain
          </button>
        </div>
      </div>
    </div>
  );
};
