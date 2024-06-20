import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PatientTreatmentService } from "./patientTreatment.service";
import { PatientTreatmentControllerBase } from "./base/patientTreatment.controller.base";

@swagger.ApiTags("patientTreatments")
@common.Controller("patientTreatments")
export class PatientTreatmentController extends PatientTreatmentControllerBase {
  constructor(
    protected readonly service: PatientTreatmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
