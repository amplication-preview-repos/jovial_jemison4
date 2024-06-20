import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DoctorListService } from "./doctorList.service";
import { DoctorListControllerBase } from "./base/doctorList.controller.base";

@swagger.ApiTags("doctorLists")
@common.Controller("doctorLists")
export class DoctorListController extends DoctorListControllerBase {
  constructor(
    protected readonly service: DoctorListService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
