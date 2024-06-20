import { DoctorPersonalData as TDoctorPersonalData } from "../api/doctorPersonalData/DoctorPersonalData";

export const DOCTORPERSONALDATA_TITLE_FIELD = "id";

export const DoctorPersonalDataTitle = (
  record: TDoctorPersonalData
): string => {
  return record.id?.toString() || String(record.id);
};
