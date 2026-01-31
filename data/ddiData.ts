
import { DOAC, InteractionLevel, Interaction } from '../types';

export const categories = [
  "Antiarrhythmics",
  "Cardiovascular Drugs",
  "Antibiotics & Antifungals",
  "HIV & Antiviral Drugs",
  "Cancer Drugs (TKI / Antimitotic / Anthracyclines)",
  "Hormonal & Immune-modulating",
  "Antiepileptics (AEDs)",
  "NSAIDs & Antiplatelets",
  "Herbal Medicines",
  "Others"
];

export const interactions: Interaction[] = [
  // --- TABLE 5: ANTIARRHYTHMICS ---
  { doac: DOAC.Dabigatran, coMed: "Amiodarone", category: "Antiarrhythmics", level: InteractionLevel.CAUTION },
  { doac: DOAC.Rivaroxaban, coMed: "Amiodarone", category: "Antiarrhythmics", level: InteractionLevel.CAUTION },
  { doac: DOAC.Apixaban, coMed: "Amiodarone", category: "Antiarrhythmics", level: InteractionLevel.CAUTION },
  { doac: DOAC.Edoxaban, coMed: "Amiodarone", category: "Antiarrhythmics", level: InteractionLevel.DOSE_REDUCTION, notes: "Reduce to 30mg QD" },

  { doac: DOAC.Dabigatran, coMed: "Dronedarone", category: "Antiarrhythmics", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Rivaroxaban, coMed: "Dronedarone", category: "Antiarrhythmics", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Apixaban, coMed: "Dronedarone", category: "Antiarrhythmics", level: InteractionLevel.CAUTION },
  { doac: DOAC.Edoxaban, coMed: "Dronedarone", category: "Antiarrhythmics", level: InteractionLevel.DOSE_REDUCTION },

  { doac: DOAC.Dabigatran, coMed: "Verapamil", category: "Antiarrhythmics", level: InteractionLevel.DOSE_REDUCTION, notes: "Consider 110mg BID" },
  { doac: DOAC.Rivaroxaban, coMed: "Verapamil", category: "Antiarrhythmics", level: InteractionLevel.CAUTION },
  { doac: DOAC.Apixaban, coMed: "Verapamil", category: "Antiarrhythmics", level: InteractionLevel.CAUTION },
  { doac: DOAC.Edoxaban, coMed: "Verapamil", category: "Antiarrhythmics", level: InteractionLevel.DOSE_REDUCTION },

  { doac: DOAC.Dabigatran, coMed: "Quinidine", category: "Antiarrhythmics", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Edoxaban, coMed: "Quinidine", category: "Antiarrhythmics", level: InteractionLevel.DOSE_REDUCTION },

  { doac: DOAC.Dabigatran, coMed: "Diltiazem", category: "Antiarrhythmics", level: InteractionLevel.CAUTION },
  { doac: DOAC.Rivaroxaban, coMed: "Diltiazem", category: "Antiarrhythmics", level: InteractionLevel.CAUTION },
  { doac: DOAC.Apixaban, coMed: "Diltiazem", category: "Antiarrhythmics", level: InteractionLevel.CAUTION },
  { doac: DOAC.Edoxaban, coMed: "Diltiazem", category: "Antiarrhythmics", level: InteractionLevel.CAUTION },

  { doac: DOAC.Dabigatran, coMed: "Digoxin", category: "Antiarrhythmics", level: InteractionLevel.NO_INTERACTION },
  { doac: DOAC.Rivaroxaban, coMed: "Digoxin", category: "Antiarrhythmics", level: InteractionLevel.NO_INTERACTION },
  { doac: DOAC.Apixaban, coMed: "Digoxin", category: "Antiarrhythmics", level: InteractionLevel.NO_INTERACTION },
  { doac: DOAC.Edoxaban, coMed: "Digoxin", category: "Antiarrhythmics", level: InteractionLevel.NO_INTERACTION },

  // --- TABLE 5: OTHER CARDIOVASCULAR ---
  { doac: DOAC.Dabigatran, coMed: "Ticagrelor", category: "Cardiovascular Drugs", level: InteractionLevel.CAUTION },
  { doac: DOAC.Rivaroxaban, coMed: "Ticagrelor", category: "Cardiovascular Drugs", level: InteractionLevel.CAUTION },
  { doac: DOAC.Apixaban, coMed: "Ticagrelor", category: "Cardiovascular Drugs", level: InteractionLevel.CAUTION },
  { doac: DOAC.Edoxaban, coMed: "Ticagrelor", category: "Cardiovascular Drugs", level: InteractionLevel.CAUTION },

  { doac: DOAC.Dabigatran, coMed: "Atorvastatin", category: "Cardiovascular Drugs", level: InteractionLevel.NO_INTERACTION },
  { doac: DOAC.Rivaroxaban, coMed: "Atorvastatin", category: "Cardiovascular Drugs", level: InteractionLevel.NO_INTERACTION },
  { doac: DOAC.Edoxaban, coMed: "Atorvastatin", category: "Cardiovascular Drugs", level: InteractionLevel.NO_INTERACTION },

  // --- TABLE 5: ANTIBIOTICS & ANTIFUNGALS ---
  { doac: DOAC.Dabigatran, coMed: "Clarithromycin", category: "Antibiotics & Antifungals", level: InteractionLevel.CAUTION },
  { doac: DOAC.Rivaroxaban, coMed: "Clarithromycin", category: "Antibiotics & Antifungals", level: InteractionLevel.CAUTION },
  { doac: DOAC.Apixaban, coMed: "Clarithromycin", category: "Antibiotics & Antifungals", level: InteractionLevel.CAUTION },
  { doac: DOAC.Edoxaban, coMed: "Clarithromycin", category: "Antibiotics & Antifungals", level: InteractionLevel.CAUTION },

  { doac: DOAC.Dabigatran, coMed: "Erythromycin", category: "Antibiotics & Antifungals", level: InteractionLevel.CAUTION },
  { doac: DOAC.Rivaroxaban, coMed: "Erythromycin", category: "Antibiotics & Antifungals", level: InteractionLevel.CAUTION },
  { doac: DOAC.Apixaban, coMed: "Erythromycin", category: "Antibiotics & Antifungals", level: InteractionLevel.CAUTION },
  { doac: DOAC.Edoxaban, coMed: "Erythromycin", category: "Antibiotics & Antifungals", level: InteractionLevel.DOSE_REDUCTION },

  { doac: DOAC.Dabigatran, coMed: "Ketoconazole", category: "Antibiotics & Antifungals", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Rivaroxaban, coMed: "Ketoconazole", category: "Antibiotics & Antifungals", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Apixaban, coMed: "Ketoconazole", category: "Antibiotics & Antifungals", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Edoxaban, coMed: "Ketoconazole", category: "Antibiotics & Antifungals", level: InteractionLevel.CONTRAINDICATED },

  { doac: DOAC.Dabigatran, coMed: "Itraconazole", category: "Antibiotics & Antifungals", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Rivaroxaban, coMed: "Itraconazole", category: "Antibiotics & Antifungals", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Apixaban, coMed: "Itraconazole", category: "Antibiotics & Antifungals", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Edoxaban, coMed: "Itraconazole", category: "Antibiotics & Antifungals", level: InteractionLevel.CONTRAINDICATED },

  { doac: DOAC.Rivaroxaban, coMed: "Voriconazole", category: "Antibiotics & Antifungals", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Apixaban, coMed: "Voriconazole", category: "Antibiotics & Antifungals", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Rivaroxaban, coMed: "Posaconazole", category: "Antibiotics & Antifungals", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Apixaban, coMed: "Posaconazole", category: "Antibiotics & Antifungals", level: InteractionLevel.CONTRAINDICATED },

  { doac: DOAC.Rivaroxaban, coMed: "Fluconazole", category: "Antibiotics & Antifungals", level: InteractionLevel.CAUTION },
  { doac: DOAC.Apixaban, coMed: "Fluconazole", category: "Antibiotics & Antifungals", level: InteractionLevel.CAUTION },

  { doac: DOAC.Dabigatran, coMed: "Rifampicin", category: "Antibiotics & Antifungals", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Rivaroxaban, coMed: "Rifampicin", category: "Antibiotics & Antifungals", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Apixaban, coMed: "Rifampicin", category: "Antibiotics & Antifungals", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Edoxaban, coMed: "Rifampicin", category: "Antibiotics & Antifungals", level: InteractionLevel.DECREASE_LEVEL },

  // --- TABLE 6: CANCER DRUGS ---
  { doac: DOAC.Dabigatran, coMed: "Vinblastine", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Rivaroxaban, coMed: "Vinblastine", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Apixaban, coMed: "Vinblastine", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Edoxaban, coMed: "Vinblastine", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.DECREASE_LEVEL },

  { doac: DOAC.Dabigatran, coMed: "Doxorubicin", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Rivaroxaban, coMed: "Doxorubicin", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Apixaban, coMed: "Doxorubicin", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Edoxaban, coMed: "Doxorubicin", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.DECREASE_LEVEL },

  { doac: DOAC.Dabigatran, coMed: "Imatinib", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Rivaroxaban, coMed: "Imatinib", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Apixaban, coMed: "Imatinib", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Edoxaban, coMed: "Imatinib", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.CONTRAINDICATED },

  { doac: DOAC.Dabigatran, coMed: "Crizotinib", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Rivaroxaban, coMed: "Crizotinib", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Apixaban, coMed: "Crizotinib", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Edoxaban, coMed: "Crizotinib", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.CONTRAINDICATED },

  { doac: DOAC.Dabigatran, coMed: "Vandetanib", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Edoxaban, coMed: "Vandetanib", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.CONTRAINDICATED },

  { doac: DOAC.Dabigatran, coMed: "Sunitinib", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Edoxaban, coMed: "Sunitinib", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.CONTRAINDICATED },

  { doac: DOAC.Apixaban, coMed: "Etoposide", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.CAUTION },
  { doac: DOAC.Rivaroxaban, coMed: "Etoposide", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.CAUTION },

  { doac: DOAC.Dabigatran, coMed: "Methotrexate", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.NO_INTERACTION },
  { doac: DOAC.Rivaroxaban, coMed: "Methotrexate", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.NO_INTERACTION },
  { doac: DOAC.Apixaban, coMed: "Methotrexate", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.NO_INTERACTION },
  { doac: DOAC.Edoxaban, coMed: "Methotrexate", category: "Cancer Drugs (TKI / Antimitotic / Anthracyclines)", level: InteractionLevel.NO_INTERACTION },

  // --- TABLE 7: HORMONAL & IMMUNE ---
  { doac: DOAC.Dabigatran, coMed: "Abiraterone", category: "Hormonal & Immune-modulating", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Rivaroxaban, coMed: "Abiraterone", category: "Hormonal & Immune-modulating", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Apixaban, coMed: "Abiraterone", category: "Hormonal & Immune-modulating", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Edoxaban, coMed: "Abiraterone", category: "Hormonal & Immune-modulating", level: InteractionLevel.CONTRAINDICATED },

  { doac: DOAC.Dabigatran, coMed: "Enzalutamide", category: "Hormonal & Immune-modulating", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Rivaroxaban, coMed: "Enzalutamide", category: "Hormonal & Immune-modulating", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Apixaban, coMed: "Enzalutamide", category: "Hormonal & Immune-modulating", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Edoxaban, coMed: "Enzalutamide", category: "Hormonal & Immune-modulating", level: InteractionLevel.CONTRAINDICATED },

  { doac: DOAC.Dabigatran, coMed: "Ciclosporine", category: "Hormonal & Immune-modulating", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Rivaroxaban, coMed: "Ciclosporine", category: "Hormonal & Immune-modulating", level: InteractionLevel.CAUTION },
  { doac: DOAC.Apixaban, coMed: "Ciclosporine", category: "Hormonal & Immune-modulating", level: InteractionLevel.CAUTION },
  { doac: DOAC.Edoxaban, coMed: "Ciclosporine", category: "Hormonal & Immune-modulating", level: InteractionLevel.DOSE_REDUCTION },

  { doac: DOAC.Dabigatran, coMed: "Tacrolimus", category: "Hormonal & Immune-modulating", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Rivaroxaban, coMed: "Tacrolimus", category: "Hormonal & Immune-modulating", level: InteractionLevel.DOSE_REDUCTION },
  { doac: DOAC.Apixaban, coMed: "Tacrolimus", category: "Hormonal & Immune-modulating", level: InteractionLevel.DOSE_REDUCTION },
  { doac: DOAC.Edoxaban, coMed: "Tacrolimus", category: "Hormonal & Immune-modulating", level: InteractionLevel.DOSE_REDUCTION },

  // --- TABLE 7: ANTIEPILEPTICS ---
  { doac: DOAC.Dabigatran, coMed: "Carbamazepine", category: "Antiepileptics (AEDs)", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Rivaroxaban, coMed: "Carbamazepine", category: "Antiepileptics (AEDs)", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Apixaban, coMed: "Carbamazepine", category: "Antiepileptics (AEDs)", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Edoxaban, coMed: "Carbamazepine", category: "Antiepileptics (AEDs)", level: InteractionLevel.DECREASE_LEVEL },

  { doac: DOAC.Dabigatran, coMed: "Phenobarbital", category: "Antiepileptics (AEDs)", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Rivaroxaban, coMed: "Phenobarbital", category: "Antiepileptics (AEDs)", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Apixaban, coMed: "Phenobarbital", category: "Antiepileptics (AEDs)", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Edoxaban, coMed: "Phenobarbital", category: "Antiepileptics (AEDs)", level: InteractionLevel.DECREASE_LEVEL },

  { doac: DOAC.Dabigatran, coMed: "Phenytoin", category: "Antiepileptics (AEDs)", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Rivaroxaban, coMed: "Phenytoin", category: "Antiepileptics (AEDs)", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Apixaban, coMed: "Phenytoin", category: "Antiepileptics (AEDs)", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Edoxaban, coMed: "Phenytoin", category: "Antiepileptics (AEDs)", level: InteractionLevel.DECREASE_LEVEL },

  { doac: DOAC.Rivaroxaban, coMed: "Valproic acid", category: "Antiepileptics (AEDs)", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Apixaban, coMed: "Valproic acid", category: "Antiepileptics (AEDs)", level: InteractionLevel.DECREASE_LEVEL },

  // --- TABLE 8: HERBAL ---
  { doac: DOAC.Dabigatran, coMed: "St. John's wort", category: "Herbal Medicines", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Rivaroxaban, coMed: "St. John's wort", category: "Herbal Medicines", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Apixaban, coMed: "St. John's wort", category: "Herbal Medicines", level: InteractionLevel.DECREASE_LEVEL },
  { doac: DOAC.Edoxaban, coMed: "St. John's wort", category: "Herbal Medicines", level: InteractionLevel.DECREASE_LEVEL },

  { doac: DOAC.Dabigatran, coMed: "Curcumin", category: "Herbal Medicines", level: InteractionLevel.CAUTION },
  { doac: DOAC.Rivaroxaban, coMed: "Curcumin", category: "Herbal Medicines", level: InteractionLevel.CAUTION },
  { doac: DOAC.Apixaban, coMed: "Curcumin", category: "Herbal Medicines", level: InteractionLevel.CAUTION },
  { doac: DOAC.Edoxaban, coMed: "Curcumin", category: "Herbal Medicines", level: InteractionLevel.CAUTION },

  { doac: DOAC.Dabigatran, coMed: "Garlic", category: "Herbal Medicines", level: InteractionLevel.CAUTION },
  { doac: DOAC.Rivaroxaban, coMed: "Garlic", category: "Herbal Medicines", level: InteractionLevel.CAUTION },
  { doac: DOAC.Apixaban, coMed: "Garlic", category: "Herbal Medicines", level: InteractionLevel.CAUTION },
  { doac: DOAC.Edoxaban, coMed: "Garlic", category: "Herbal Medicines", level: InteractionLevel.CAUTION },

  { doac: DOAC.Dabigatran, coMed: "Ginkgo biloba", category: "Herbal Medicines", level: InteractionLevel.CAUTION },
  { doac: DOAC.Rivaroxaban, coMed: "Ginkgo biloba", category: "Herbal Medicines", level: InteractionLevel.CAUTION },
  { doac: DOAC.Apixaban, coMed: "Ginkgo biloba", category: "Herbal Medicines", level: InteractionLevel.CAUTION },
  { doac: DOAC.Edoxaban, coMed: "Ginkgo biloba", category: "Herbal Medicines", level: InteractionLevel.CAUTION },

  // --- HIV Protease Inhibitors ---
  { doac: DOAC.Dabigatran, coMed: "Ritonavir", category: "HIV & Antiviral Drugs", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Rivaroxaban, coMed: "Ritonavir", category: "HIV & Antiviral Drugs", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Apixaban, coMed: "Ritonavir", category: "HIV & Antiviral Drugs", level: InteractionLevel.CONTRAINDICATED },
  { doac: DOAC.Edoxaban, coMed: "Ritonavir", category: "HIV & Antiviral Drugs", level: InteractionLevel.CONTRAINDICATED },

  // --- PD: NSAIDs & Antiplatelets ---
  { doac: DOAC.Dabigatran, coMed: "Aspirin", category: "NSAIDs & Antiplatelets", level: InteractionLevel.CAUTION },
  { doac: DOAC.Rivaroxaban, coMed: "Aspirin", category: "NSAIDs & Antiplatelets", level: InteractionLevel.CAUTION },
  { doac: DOAC.Apixaban, coMed: "Aspirin", category: "NSAIDs & Antiplatelets", level: InteractionLevel.CAUTION },
  { doac: DOAC.Edoxaban, coMed: "Aspirin", category: "NSAIDs & Antiplatelets", level: InteractionLevel.CAUTION },

  { doac: DOAC.Dabigatran, coMed: "Clopidogrel", category: "NSAIDs & Antiplatelets", level: InteractionLevel.CAUTION },
  { doac: DOAC.Rivaroxaban, coMed: "Clopidogrel", category: "NSAIDs & Antiplatelets", level: InteractionLevel.CAUTION },
  { doac: DOAC.Apixaban, coMed: "Clopidogrel", category: "NSAIDs & Antiplatelets", level: InteractionLevel.CAUTION },
  { doac: DOAC.Edoxaban, coMed: "Clopidogrel", category: "NSAIDs & Antiplatelets", level: InteractionLevel.CAUTION },

  { doac: DOAC.Dabigatran, coMed: "Naproxen", category: "NSAIDs & Antiplatelets", level: InteractionLevel.CAUTION },
  { doac: DOAC.Rivaroxaban, coMed: "Naproxen", category: "NSAIDs & Antiplatelets", level: InteractionLevel.CAUTION },
  { doac: DOAC.Apixaban, coMed: "Naproxen", category: "NSAIDs & Antiplatelets", level: InteractionLevel.CAUTION },
  { doac: DOAC.Edoxaban, coMed: "Naproxen", category: "NSAIDs & Antiplatelets", level: InteractionLevel.CAUTION },

  // --- SSRI/SNRI ---
  { doac: DOAC.Dabigatran, coMed: "Fluoxetine", category: "Others", level: InteractionLevel.CAUTION },
  { doac: DOAC.Rivaroxaban, coMed: "Fluoxetine", category: "Others", level: InteractionLevel.CAUTION },
  { doac: DOAC.Apixaban, coMed: "Fluoxetine", category: "Others", level: InteractionLevel.CAUTION },
  { doac: DOAC.Edoxaban, coMed: "Fluoxetine", category: "Others", level: InteractionLevel.CAUTION },
  { doac: DOAC.Dabigatran, coMed: "Sertraline", category: "Others", level: InteractionLevel.CAUTION },
  { doac: DOAC.Rivaroxaban, coMed: "Sertraline", category: "Others", level: InteractionLevel.CAUTION },
  { doac: DOAC.Apixaban, coMed: "Sertraline", category: "Others", level: InteractionLevel.CAUTION },
  { doac: DOAC.Edoxaban, coMed: "Sertraline", category: "Others", level: InteractionLevel.CAUTION },
];

export const getInteractingDrugs = () => {
  const drugs = Array.from(new Set(interactions.map(i => i.coMed))).sort();
  return drugs.map(name => {
    const entry = interactions.find(i => i.coMed === name);
    return { name, category: entry?.category || "Other" };
  });
};
