import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PatientTreatmentResolverBase } from "./base/patientTreatment.resolver.base";
import { PatientTreatment } from "./base/PatientTreatment";
import { PatientTreatmentService } from "./patientTreatment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PatientTreatment)
export class PatientTreatmentResolver extends PatientTreatmentResolverBase {
  constructor(
    protected readonly service: PatientTreatmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
