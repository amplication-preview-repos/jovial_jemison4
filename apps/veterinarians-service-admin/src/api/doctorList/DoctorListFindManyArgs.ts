import { DoctorListWhereInput } from "./DoctorListWhereInput";
import { DoctorListOrderByInput } from "./DoctorListOrderByInput";

export type DoctorListFindManyArgs = {
  where?: DoctorListWhereInput;
  orderBy?: Array<DoctorListOrderByInput>;
  skip?: number;
  take?: number;
};
