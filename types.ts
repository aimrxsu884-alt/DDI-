
export enum DOAC {
  Dabigatran = 'Dabigatran',
  Rivaroxaban = 'Rivaroxaban',
  Apixaban = 'Apixaban',
  Edoxaban = 'Edoxaban'
}

export enum InteractionLevel {
  CONTRAINDICATED = 'Contraindicated (↑ Levels)',
  DECREASE_LEVEL = 'Contraindicated (↓ Levels)',
  DOSE_REDUCTION = 'Dose reduction',
  CAUTION = 'Caution (Bleeding Risk)',
  NO_INTERACTION = 'No clinical interaction expected',
  UNKNOWN = 'Data not available'
}

export interface Interaction {
  doac: DOAC;
  coMed: string;
  category: string;
  level: InteractionLevel;
  notes?: string;
  mechanism?: string;
}

export interface CoMedication {
  name: string;
  category: string;
}
