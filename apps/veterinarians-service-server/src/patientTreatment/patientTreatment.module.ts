import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PatientTreatmentModuleBase } from "./base/patientTreatment.module.base";
import { PatientTreatmentService } from "./patientTreatment.service";
import { PatientTreatmentController } from "./patientTreatment.controller";
import { PatientTreatmentResolver } from "./patientTreatment.resolver";

@Module({
  imports: [PatientTreatmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [PatientTreatmentController],
  providers: [PatientTreatmentService, PatientTreatmentResolver],
  exports: [PatientTreatmentService],
})
export class PatientTreatmentModule {}
