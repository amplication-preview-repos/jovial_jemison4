import { PatientTreatmentWhereInput } from "./PatientTreatmentWhereInput";
import { PatientTreatmentOrderByInput } from "./PatientTreatmentOrderByInput";

export type PatientTreatmentFindManyArgs = {
  where?: PatientTreatmentWhereInput;
  orderBy?: Array<PatientTreatmentOrderByInput>;
  skip?: number;
  take?: number;
};
