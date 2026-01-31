
import React from 'react';
import { InteractionLevel, Interaction } from '../types';

interface DDIResultCardProps {
  interaction: Interaction | undefined;
  doac: string;
  coMed: string;
}

const DDIResultCard: React.FC<DDIResultCardProps> = ({ interaction, doac, coMed }) => {
  const getLevelStyles = (level: InteractionLevel | undefined) => {
    switch (level) {
      case InteractionLevel.CONTRAINDICATED:
        return 'bg-red-50/50 border-red-500 text-red-900 shadow-red-100/50';
      case InteractionLevel.DECREASE_LEVEL:
        return 'bg-blue-50/50 border-blue-900 text-blue-900 shadow-blue-100/50';
      case InteractionLevel.DOSE_REDUCTION:
        return 'bg-orange-50/50 border-orange-500 text-orange-900 shadow-orange-100/50';
      case InteractionLevel.CAUTION:
        return 'bg-yellow-50/50 border-yellow-400 text-yellow-900 shadow-yellow-100/50';
      case InteractionLevel.NO_INTERACTION:
        return 'bg-green-50/50 border-green-500 text-green-900 shadow-green-100/50';
      default:
        return 'bg-slate-50/50 border-slate-300 text-slate-700 shadow-slate-100/50';
    }
  };

  const getStatusBadge = (level: InteractionLevel | undefined) => {
    const base = "px-4 py-2 text-xs font-black rounded-xl uppercase tracking-wider shadow-sm border";
    switch (level) {
      case InteractionLevel.CONTRAINDICATED:
        return <span className={`${base} bg-red-600 text-white border-red-700`}>Avoid (↑)</span>;
      case InteractionLevel.DECREASE_LEVEL:
        return <span className={`${base} bg-blue-900 text-white border-blue-950`}>Avoid (↓)</span>;
      case InteractionLevel.DOSE_REDUCTION:
        return <span className={`${base} bg-orange-500 text-white border-orange-600`}>Reduce</span>;
      case InteractionLevel.CAUTION:
        return <span className={`${base} bg-yellow-400 text-slate-900 border-yellow-500`}>Caution</span>;
      case InteractionLevel.NO_INTERACTION:
        return <span className={`${base} bg-green-600 text-white border-green-700`}>Safe</span>;
      default:
        return <span className={`${base} bg-slate-400 text-white border-slate-500`}>Unknown</span>;
    }
  };

  const level = interaction?.level || InteractionLevel.UNKNOWN;

  return (
    <div className={`p-8 border-l-[12px] rounded-[2.5rem] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-white border-t border-r border-b ${getLevelStyles(level)}`}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h4 className="text-2xl font-black flex flex-wrap items-center gap-3">
          <span className="text-slate-400 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">{doac}</span>
          <span className="text-slate-300 font-light text-3xl">+</span>
          <span className="text-slate-900">{coMed}</span>
        </h4>
        {getStatusBadge(level)}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-[2rem] border border-white shadow-sm">
          <span className="text-[11px] font-black uppercase text-slate-400 block mb-2 tracking-[0.2em]">Therapeutic Class</span>
          <p className="font-black text-slate-800 text-lg">{interaction?.category || 'General Medication'}</p>
        </div>
        
        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-[2rem] border border-white shadow-sm">
          <span className="text-[11px] font-black uppercase text-slate-400 block mb-2 tracking-[0.2em]">Evidence-Based Guidance</span>
          <p className="text-base font-bold italic text-slate-700 leading-relaxed">
            {interaction?.notes || interaction?.mechanism || (level === InteractionLevel.NO_INTERACTION ? 'No clinically relevant interaction anticipated per EHRA 2021.' : 'Clinical data for this specific pairing is limited. Proceed with standard caution.')}
          </p>
        </div>
      </div>
      
      <div className="mt-8 flex items-center">
          {level === InteractionLevel.DECREASE_LEVEL && (
            <div className="w-full p-4 bg-blue-900 text-white rounded-2xl text-[12px] font-black flex items-center gap-3 uppercase tracking-wider shadow-lg shadow-blue-200">
              <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              <span>Sub-therapeutic Risk: Reduced NOAC plasma levels detected. High stroke risk.</span>
            </div>
          )}
          {level === InteractionLevel.CONTRAINDICATED && (
            <div className="w-full p-4 bg-red-600 text-white rounded-2xl text-[12px] font-black flex items-center gap-3 uppercase tracking-wider shadow-lg shadow-red-200">
              <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
              <span>Bleeding Alert: Elevated NOAC plasma levels detected. High hemorrhage risk.</span>
            </div>
          )}
          {level === InteractionLevel.NO_INTERACTION && (
            <div className="w-full p-4 bg-green-600 text-white rounded-2xl text-[12px] font-black flex items-center gap-3 uppercase tracking-wider shadow-lg shadow-green-200">
              <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Clinical Safety: Validated pairing. No specific monitoring needed.</span>
            </div>
          )}
          {level === InteractionLevel.CAUTION && (
            <div className="w-full p-4 bg-yellow-400 text-yellow-900 rounded-2xl text-[12px] font-black flex items-center gap-3 uppercase tracking-wider border border-yellow-500 shadow-lg shadow-yellow-100">
              <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <span>Caution: Monitor signs of bleeding or changes in renal status.</span>
            </div>
          )}
      </div>
    </div>
  );
};

export default DDIResultCard;
