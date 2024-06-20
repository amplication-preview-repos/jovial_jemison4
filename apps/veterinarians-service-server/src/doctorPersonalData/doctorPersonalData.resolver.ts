import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DoctorPersonalDataResolverBase } from "./base/doctorPersonalData.resolver.base";
import { DoctorPersonalData } from "./base/DoctorPersonalData";
import { DoctorPersonalDataService } from "./doctorPersonalData.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DoctorPersonalData)
export class DoctorPersonalDataResolver extends DoctorPersonalDataResolverBase {
  constructor(
    protected readonly service: DoctorPersonalDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
