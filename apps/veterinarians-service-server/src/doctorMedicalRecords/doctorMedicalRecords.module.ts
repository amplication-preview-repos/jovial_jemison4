import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DoctorMedicalRecordsModuleBase } from "./base/doctorMedicalRecords.module.base";
import { DoctorMedicalRecordsService } from "./doctorMedicalRecords.service";
import { DoctorMedicalRecordsController } from "./doctorMedicalRecords.controller";
import { DoctorMedicalRecordsResolver } from "./doctorMedicalRecords.resolver";

@Module({
  imports: [DoctorMedicalRecordsModuleBase, forwardRef(() => AuthModule)],
  controllers: [DoctorMedicalRecordsController],
  providers: [DoctorMedicalRecordsService, DoctorMedicalRecordsResolver],
  exports: [DoctorMedicalRecordsService],
})
export class DoctorMedicalRecordsModule {}
