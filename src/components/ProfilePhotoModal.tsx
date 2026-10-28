import React, { useRef } from 'react';
import { X, Upload, RotateCcw, Check, Camera, Image as ImageIcon } from 'lucide-react';
import { ENGINEER_PROFILE } from '../data/portfolioData.ts';
import { Language } from '../types/portfolio.ts';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  onUpdatePhoto: (newPhotoUrl: string) => void;
  onResetPhoto: () => void;
  lang?: Language;
}

export const ProfilePhotoModal: React.FC<Props> = ({
  isOpen,
  onClose,
  currentPhoto,
  onUpdatePhoto,
  onResetPhoto,
  lang = 'en',
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onUpdatePhoto(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-sky-400" />
            <h3 className="text-base font-bold text-white">
              {lang === 'fr' ? 'Photo de Profil Ingénieur' : 'Engineer Profile Picture'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="py-6 flex flex-col items-center text-center">
          <div className="relative group w-44 h-44 rounded-2xl overflow-hidden border-2 border-sky-500/50 shadow-xl bg-slate-950 mb-4">
            <img
              src={currentPhoto}
              alt={ENGINEER_PROFILE.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <h4 className="text-lg font-bold text-white">{ENGINEER_PROFILE.name}</h4>
          <p className="text-xs text-sky-400 font-mono mt-0.5">
            {lang === 'fr' ? ENGINEER_PROFILE.titleFr : ENGINEER_PROFILE.title}
          </p>
          <p className="text-xs text-slate-400 mt-2 max-w-xs">
            {lang === 'fr'
              ? 'Sélectionnez votre photo officielle ci-dessous ou importez une photo personnalisée.'
              : 'Choose your preferred profile image below or upload an updated headshot.'}
          </p>

          {/* Quick preset selector buttons */}
          <div className="mt-4 flex items-center gap-2">
            <button
              onClick={() => onUpdatePhoto(ENGINEER_PROFILE.userPic)}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 rounded-lg border border-slate-700 cursor-pointer flex items-center gap-1.5"
            >
              <ImageIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>{lang === 'fr' ? 'Photo Réelle (Costume/Cravate)' : 'Real Photo (Uploaded)'}</span>
            </button>
            <button
              onClick={() => onUpdatePhoto(ENGINEER_PROFILE.aiAvatar)}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 rounded-lg border border-slate-700 cursor-pointer flex items-center gap-1.5"
            >
              <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'fr' ? 'Portrait Bureau' : 'Office Portrait'}</span>
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'Importer un fichier' : 'Upload From Computer'}</span>
          </button>

          <button
            onClick={onResetPhoto}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'Réinitialiser' : 'Reset'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-lg transition-colors cursor-pointer"
          >
            {lang === 'fr' ? 'Fermer' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  );
};
