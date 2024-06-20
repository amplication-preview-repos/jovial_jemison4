import { DoctorList as TDoctorList } from "../api/doctorList/DoctorList";

export const DOCTORLIST_TITLE_FIELD = "id";

export const DoctorListTitle = (record: TDoctorList): string => {
  return record.id?.toString() || String(record.id);
};
