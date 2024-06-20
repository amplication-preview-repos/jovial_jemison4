import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DoctorMedicalRecordsResolverBase } from "./base/doctorMedicalRecords.resolver.base";
import { DoctorMedicalRecords } from "./base/DoctorMedicalRecords";
import { DoctorMedicalRecordsService } from "./doctorMedicalRecords.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DoctorMedicalRecords)
export class DoctorMedicalRecordsResolver extends DoctorMedicalRecordsResolverBase {
  constructor(
    protected readonly service: DoctorMedicalRecordsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
