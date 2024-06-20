import { DoctorMedicalRecordsWhereInput } from "./DoctorMedicalRecordsWhereInput";
import { DoctorMedicalRecordsOrderByInput } from "./DoctorMedicalRecordsOrderByInput";

export type DoctorMedicalRecordsFindManyArgs = {
  where?: DoctorMedicalRecordsWhereInput;
  orderBy?: Array<DoctorMedicalRecordsOrderByInput>;
  skip?: number;
  take?: number;
};
