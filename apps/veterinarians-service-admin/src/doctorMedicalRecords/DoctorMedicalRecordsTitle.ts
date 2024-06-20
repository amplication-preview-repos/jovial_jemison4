import { DoctorMedicalRecords as TDoctorMedicalRecords } from "../api/doctorMedicalRecords/DoctorMedicalRecords";

export const DOCTORMEDICALRECORDS_TITLE_FIELD = "id";

export const DoctorMedicalRecordsTitle = (
  record: TDoctorMedicalRecords
): string => {
  return record.id?.toString() || String(record.id);
};
