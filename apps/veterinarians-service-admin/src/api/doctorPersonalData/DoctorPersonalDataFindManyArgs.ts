import { DoctorPersonalDataWhereInput } from "./DoctorPersonalDataWhereInput";
import { DoctorPersonalDataOrderByInput } from "./DoctorPersonalDataOrderByInput";

export type DoctorPersonalDataFindManyArgs = {
  where?: DoctorPersonalDataWhereInput;
  orderBy?: Array<DoctorPersonalDataOrderByInput>;
  skip?: number;
  take?: number;
};
