import { PatientTreatment as TPatientTreatment } from "../api/patientTreatment/PatientTreatment";

export const PATIENTTREATMENT_TITLE_FIELD = "id";

export const PatientTreatmentTitle = (record: TPatientTreatment): string => {
  return record.id?.toString() || String(record.id);
};
