import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DoctorMedicalRecordsService } from "./doctorMedicalRecords.service";
import { DoctorMedicalRecordsControllerBase } from "./base/doctorMedicalRecords.controller.base";

@swagger.ApiTags("doctorMedicalRecords")
@common.Controller("doctorMedicalRecords")
export class DoctorMedicalRecordsController extends DoctorMedicalRecordsControllerBase {
  constructor(
    protected readonly service: DoctorMedicalRecordsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
