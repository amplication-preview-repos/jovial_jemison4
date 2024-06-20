import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DoctorListModuleBase } from "./base/doctorList.module.base";
import { DoctorListService } from "./doctorList.service";
import { DoctorListController } from "./doctorList.controller";
import { DoctorListResolver } from "./doctorList.resolver";

@Module({
  imports: [DoctorListModuleBase, forwardRef(() => AuthModule)],
  controllers: [DoctorListController],
  providers: [DoctorListService, DoctorListResolver],
  exports: [DoctorListService],
})
export class DoctorListModule {}
