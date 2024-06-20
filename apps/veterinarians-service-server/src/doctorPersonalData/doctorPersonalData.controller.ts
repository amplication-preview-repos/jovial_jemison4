import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DoctorPersonalDataService } from "./doctorPersonalData.service";
import { DoctorPersonalDataControllerBase } from "./base/doctorPersonalData.controller.base";

@swagger.ApiTags("doctorPersonalData")
@common.Controller("doctorPersonalData")
export class DoctorPersonalDataController extends DoctorPersonalDataControllerBase {
  constructor(
    protected readonly service: DoctorPersonalDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
