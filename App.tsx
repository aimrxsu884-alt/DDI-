
import React, { useState, useMemo } from 'react';
import { DOAC, InteractionLevel, Interaction } from './types';
import { interactions, getInteractingDrugs } from './data/ddiData';
import DDIResultCard from './components/DDIResultCard';

const App: React.FC = () => {
  const [selectedDoac, setSelectedDoac] = useState<DOAC | ''>('');
  const [selectedCoMeds, setSelectedCoMeds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const allCoMeds = useMemo(() => getInteractingDrugs(), []);

  const filteredCoMeds = useMemo(() => {
    return allCoMeds.filter(drug => 
      drug.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allCoMeds]);

  const toggleCoMed = (drugName: string) => {
    setSelectedCoMeds(prev => 
      prev.includes(drugName) 
        ? prev.filter(name => name !== drugName) 
        : [...prev, drugName]
    );
  };

  const selectAllFiltered = () => {
    const names = filteredCoMeds.map(f => f.name);
    setSelectedCoMeds(prev => Array.from(new Set([...prev, ...names])));
  };

  const handleClearAll = () => {
    setSelectedDoac('');
    setSelectedCoMeds([]);
    setSearchQuery('');
  };

  const activeInteractions = useMemo(() => {
    if (!selectedDoac || selectedCoMeds.length === 0) return [];
    
    const results = selectedCoMeds.map(coMed => {
      const match = interactions.find(i => i.doac === selectedDoac && i.coMed === coMed);
      return match || { 
        doac: selectedDoac as DOAC, 
        coMed, 
        category: 'Other', 
        level: InteractionLevel.UNKNOWN 
      } as Interaction;
    });

    const severityOrder = [
      InteractionLevel.CONTRAINDICATED,
      InteractionLevel.DECREASE_LEVEL,
      InteractionLevel.DOSE_REDUCTION,
      InteractionLevel.CAUTION,
      InteractionLevel.UNKNOWN,
      InteractionLevel.NO_INTERACTION
    ];

    return results.sort((a, b) => severityOrder.indexOf(a.level) - severityOrder.indexOf(b.level));
  }, [selectedDoac, selectedCoMeds]);

  const severitySummary = useMemo(() => {
    const avoidUp = activeInteractions.filter(i => i.level === InteractionLevel.CONTRAINDICATED).length;
    const avoidDown = activeInteractions.filter(i => i.level === InteractionLevel.DECREASE_LEVEL).length;
    const adjust = activeInteractions.filter(i => i.level === InteractionLevel.DOSE_REDUCTION).length;
    const caution = activeInteractions.filter(i => i.level === InteractionLevel.CAUTION).length;
    
    const hasMultipleCaution = caution >= 2;
    const isEscalated = hasMultipleCaution;

    return { 
      avoidUp, 
      avoidDown, 
      adjust, 
      caution, 
      isEscalated 
    };
  }, [activeInteractions]);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans selection:bg-blue-100">
      <header className="bg-white border-b border-slate-200 px-6 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg shadow-blue-200">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.283a2 2 0 01-1.131.21l-2.02-.35a2 2 0 00-1.983 1.238 2 2 0 00.465 2.13l1.492 1.518c.523.527 1.247.74 1.959.551a1 1 0 00.544-.312l1.703-2.394a1 1 0 011.3-.263l2.392 1.216a1 1 0 001.266-.144l1.39-1.399a1 1 0 00.262-1.123z" /></svg>
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <span className="hidden sm:inline">EHRA 2021</span> 
                <span>NOAC DDI Checker</span>
              </h1>
              <p className="text-slate-500 text-base mt-1 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Clinical Decision Support • <span className="text-blue-600 font-bold">Updated per Thai/EHRA Guidance</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.manual-cmp.cz/wp-content/uploads/2022/02/2021-EHRA-DOAC-in-Afib.pdf" target="_blank" rel="noopener noreferrer" className="text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-bold transition-all border border-slate-200 shadow-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              View Guidelines
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow p-4 md:p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <section className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-base font-black text-slate-400 uppercase tracking-[0.2em]">1. Select NOAC</h2>
                <div className="w-8 h-1 bg-blue-100 rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {Object.values(DOAC).map(doac => (
                  <button
                    key={doac}
                    onClick={() => setSelectedDoac(doac)}
                    className={`py-4 px-4 rounded-2xl text-base font-black border-2 transition-all duration-300 transform active:scale-95 ${
                      selectedDoac === doac 
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-200 -translate-y-1' 
                        : 'bg-white text-slate-600 border-slate-100 hover:border-blue-200 hover:bg-blue-50/30'
                    }`}
                  >
                    {doac}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between mt-12 mb-6">
                <h2 className="text-base font-black text-slate-400 uppercase tracking-[0.2em]">2. Co-Medications</h2>
                <div className="w-8 h-1 bg-blue-100 rounded-full"></div>
              </div>
              
              <div className="space-y-5">
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Search medication name..."
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-base font-medium outline-none transition-all focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="flex justify-between items-center px-2">
                  <button 
                    onClick={selectAllFiltered}
                    className="text-sm font-black text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Select All
                  </button>
                  {(selectedDoac || selectedCoMeds.length > 0) && (
                    <button 
                      onClick={handleClearAll}
                      className="text-sm font-black text-red-500 hover:text-red-700 transition-colors flex items-center gap-1.5"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      Clear All
                    </button>
                  )}
                </div>
                
                <div className="max-h-[500px] overflow-y-auto border-2 border-slate-100 rounded-3xl p-3 space-y-2 bg-slate-50/50 custom-scrollbar">
                  {filteredCoMeds.map(drug => (
                    <button
                      key={drug.name}
                      onClick={() => toggleCoMed(drug.name)}
                      className={`w-full text-left px-5 py-4 rounded-2xl text-base transition-all flex justify-between items-center group ${
                        selectedCoMeds.includes(drug.name)
                          ? 'bg-blue-600 text-white font-black shadow-lg shadow-blue-100 scale-[1.02]'
                          : 'text-slate-700 hover:bg-white hover:shadow-md border border-transparent'
                      }`}
                    >
                      <span>{drug.name}</span>
                      {selectedCoMeds.includes(drug.name) ? (
                        <svg className="w-6 h-6 animate-in zoom-in duration-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      ) : (
                        <svg className="w-5 h-5 text-slate-200 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /></svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Results Main Area */}
          <div className="lg:col-span-8 space-y-8">
            {!selectedDoac || selectedCoMeds.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-16 bg-white border-4 border-dashed border-slate-100 rounded-[3rem] min-h-[600px] shadow-sm">
                <div className="bg-slate-50 p-8 rounded-full mb-8">
                    <svg className="w-20 h-20 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                </div>
                <h3 className="text-3xl font-black text-slate-800 mb-4">Patient Medication Profile</h3>
                <p className="text-slate-500 max-w-md text-lg leading-relaxed font-medium">Please select a NOAC and at least one co-medication to begin the clinical interaction analysis.</p>
                <div className="mt-12 flex flex-wrap justify-center gap-6 text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 bg-slate-50 px-8 py-5 rounded-3xl">
                    <div className="flex items-center gap-2.5"><div className="w-3 h-3 rounded-full bg-red-600 shadow-sm shadow-red-200"></div>Red: Avoid (↑)</div>
                    <div className="flex items-center gap-2.5"><div className="w-3 h-3 rounded-full bg-blue-900 shadow-sm shadow-blue-200"></div>Blue: Avoid (↓)</div>
                    <div className="flex items-center gap-2.5"><div className="w-3 h-3 rounded-full bg-orange-500 shadow-sm shadow-orange-200"></div>Orange: Adjust</div>
                    <div className="flex items-center gap-2.5"><div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm shadow-yellow-200"></div>Yellow: Caution</div>
                    <div className="flex items-center gap-2.5"><div className="w-3 h-3 rounded-full bg-green-600 shadow-sm shadow-green-200"></div>Green: Safe</div>
                </div>
              </div>
            ) : (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                
                {/* Horizontal Legend */}
                <div className="bg-white px-8 py-6 rounded-[2rem] shadow-lg shadow-slate-200/40 border border-slate-100 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/30 rounded-full -mr-16 -mt-16"></div>
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 relative z-10">
                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                      <div className="flex items-center gap-3 text-xs font-black text-slate-700 tracking-wide uppercase">
                        <div className="w-4 h-4 rounded-full bg-red-600 shadow-lg shadow-red-200"></div>
                        <span>Avoid (↑)</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-black text-slate-700 tracking-wide uppercase">
                        <div className="w-4 h-4 rounded-full bg-blue-900 shadow-lg shadow-blue-200"></div>
                        <span>Avoid (↓)</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-black text-slate-700 tracking-wide uppercase">
                        <div className="w-4 h-4 rounded-full bg-orange-500 shadow-lg shadow-orange-200"></div>
                        <span>Adjust Dose</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-black text-slate-700 tracking-wide uppercase">
                        <div className="w-4 h-4 rounded-full bg-yellow-400 shadow-lg shadow-yellow-100"></div>
                        <span>Caution</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-black text-slate-700 tracking-wide uppercase">
                        <div className="w-4 h-4 rounded-full bg-green-600 shadow-lg shadow-green-100"></div>
                        <span>Safe</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-yellow-50/50 p-4 rounded-2xl border border-yellow-100/50">
                        <svg className="w-6 h-6 text-yellow-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                        <p className="text-[11px] text-yellow-800 font-black leading-snug max-w-[280px] uppercase tracking-wider">
                          * DI Yellow ≥ 2 = RED Contraindicated (High Combined Risk)
                        </p>
                    </div>
                  </div>
                </div>

                {/* Interaction Summary Card */}
                <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/30 rounded-full -mr-32 -mt-32"></div>
                  
                  {selectedCoMeds.length > 2 && (
                    <div className="mb-8 p-6 bg-indigo-600 rounded-[2rem] flex items-start gap-4 text-white shadow-xl shadow-indigo-100">
                      <div className="bg-white/20 p-3 rounded-2xl">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div className="text-sm font-bold leading-relaxed">
                        <strong className="block text-xl font-black mb-1 uppercase tracking-tight">Polypharmacy Alert</strong>
                        Multiple co-medications detected. This analysis accounts for cumulative pharmacodynamic risks. 
                        Monitor renal and hepatic function (P-gp/CYP3A4 pathways) closely.
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-end mb-10 relative z-10">
                    <div>
                        <h3 className="text-3xl font-black text-slate-900 mb-1">Interaction Summary</h3>
                        <p className="text-slate-400 font-bold uppercase text-xs tracking-[0.2em]">Risk Analysis Matrix</p>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Primary Anticoagulant</span>
                      <span className="px-8 py-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-[1.5rem] text-xl font-black shadow-2xl shadow-blue-200 border-b-4 border-blue-800 transition-transform hover:scale-105">
                        {selectedDoac}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                    <div className={`p-8 rounded-[2rem] border-2 transition-all duration-500 ${severitySummary.avoidUp > 0 ? 'bg-red-50 border-red-200 scale-105 shadow-2xl shadow-red-100/50' : 'bg-slate-50 border-transparent opacity-30 grayscale'}`}>
                      <span className="text-5xl font-black block mb-2 text-red-600">{severitySummary.avoidUp}</span>
                      <span className="text-xs font-black uppercase text-red-600 tracking-wider">Avoid (↑)</span>
                    </div>
                    <div className={`p-8 rounded-[2rem] border-2 transition-all duration-500 ${severitySummary.avoidDown > 0 ? 'bg-blue-50 border-blue-200 scale-105 shadow-2xl shadow-blue-100/50' : 'bg-slate-50 border-transparent opacity-30 grayscale'}`}>
                      <span className="text-5xl font-black block mb-2 text-blue-900">{severitySummary.avoidDown}</span>
                      <span className="text-xs font-black uppercase text-blue-900 tracking-wider">Avoid (↓)</span>
                    </div>
                    <div className={`p-8 rounded-[2rem] border-2 transition-all duration-500 ${severitySummary.adjust > 0 ? 'bg-orange-50 border-orange-200 scale-105 shadow-2xl shadow-orange-100/50' : 'bg-slate-50 border-transparent opacity-30 grayscale'}`}>
                      <span className="text-5xl font-black block mb-2 text-orange-600">{severitySummary.adjust}</span>
                      <span className="text-xs font-black uppercase text-orange-600 tracking-wider">Adjust</span>
                    </div>
                    <div className={`p-8 rounded-[2rem] border-2 transition-all duration-500 ${severitySummary.caution > 0 ? 'bg-yellow-50 border-yellow-200 scale-105 shadow-2xl shadow-yellow-100/50' : 'bg-slate-50 border-transparent opacity-30 grayscale'}`}>
                      <span className="text-5xl font-black block mb-2 text-yellow-600">{severitySummary.caution}</span>
                      <span className="text-xs font-black uppercase text-yellow-700 tracking-wider">Caution</span>
                    </div>
                  </div>

                  {/* Red Alert Escalation */}
                  {severitySummary.isEscalated && (
                    <div className="mt-10 p-8 bg-gradient-to-r from-red-600 to-red-700 rounded-[2.5rem] text-white shadow-2xl shadow-red-200 flex items-start gap-6 animate-pulse">
                      <div className="bg-white/20 p-4 rounded-2xl shrink-0">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                      </div>
                      <div>
                        <p className="font-black text-2xl uppercase tracking-tight mb-2">Escalated Risk Alert</p>
                        <p className="text-lg opacity-90 leading-relaxed font-bold">
                          Warning: {severitySummary.caution} Cautionary interactions identified. 
                          Per EHRA 2021, this combination is considered <span className="underline decoration-wavy underline-offset-4">Contraindicated</span>. 
                          Discontinue or switch agents immediately.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {activeInteractions.map((interaction) => (
                    <DDIResultCard 
                      key={`${interaction.doac}-${interaction.coMed}`}
                      interaction={interaction}
                      doac={interaction.doac}
                      coMed={interaction.coMed}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-10 px-6 mt-16 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-slate-400 uppercase tracking-[0.2em] font-black">
              DDI Analyzer Platform V5.0
            </p>
            <p className="text-sm font-bold text-slate-600 italic">
              EHRA 2021 & Thai Regional Clinical Reference Source
            </p>
          </div>
          <div className="flex gap-8 items-center">
             <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">Decision support tool only</span>
             <div className="w-1 h-8 bg-slate-100 rounded-full"></div>
             <p className="text-xs font-bold text-slate-400">© 2025 Clinical Informatics</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
