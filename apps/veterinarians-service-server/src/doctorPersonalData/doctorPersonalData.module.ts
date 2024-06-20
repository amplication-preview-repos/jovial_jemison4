import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DoctorPersonalDataModuleBase } from "./base/doctorPersonalData.module.base";
import { DoctorPersonalDataService } from "./doctorPersonalData.service";
import { DoctorPersonalDataController } from "./doctorPersonalData.controller";
import { DoctorPersonalDataResolver } from "./doctorPersonalData.resolver";

@Module({
  imports: [DoctorPersonalDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [DoctorPersonalDataController],
  providers: [DoctorPersonalDataService, DoctorPersonalDataResolver],
  exports: [DoctorPersonalDataService],
})
export class DoctorPersonalDataModule {}
