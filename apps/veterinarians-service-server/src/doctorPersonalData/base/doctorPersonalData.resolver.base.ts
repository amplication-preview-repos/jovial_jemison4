/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DoctorPersonalData } from "./DoctorPersonalData";
import { DoctorPersonalDataCountArgs } from "./DoctorPersonalDataCountArgs";
import { DoctorPersonalDataFindManyArgs } from "./DoctorPersonalDataFindManyArgs";
import { DoctorPersonalDataFindUniqueArgs } from "./DoctorPersonalDataFindUniqueArgs";
import { DeleteDoctorPersonalDataArgs } from "./DeleteDoctorPersonalDataArgs";
import { DoctorPersonalDataCreateInput } from "./DoctorPersonalDataCreateInput";
import { DoctorPersonalDataService } from "../doctorPersonalData.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DoctorPersonalData)
export class DoctorPersonalDataResolverBase {
  constructor(
    protected readonly service: DoctorPersonalDataService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DoctorPersonalData",
    action: "read",
    possession: "any",
  })
  async _doctorPersonalDataItemsMeta(
    @graphql.Args() args: DoctorPersonalDataCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DoctorPersonalData])
  @nestAccessControl.UseRoles({
    resource: "DoctorPersonalData",
    action: "read",
    possession: "any",
  })
  async doctorPersonalDataItems(
    @graphql.Args() args: DoctorPersonalDataFindManyArgs
  ): Promise<DoctorPersonalData[]> {
    return this.service.doctorPersonalDataItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DoctorPersonalData, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DoctorPersonalData",
    action: "read",
    possession: "own",
  })
  async doctorPersonalData(
    @graphql.Args() args: DoctorPersonalDataFindUniqueArgs
  ): Promise<DoctorPersonalData | null> {
    const result = await this.service.doctorPersonalData(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DoctorPersonalData)
  @nestAccessControl.UseRoles({
    resource: "DoctorPersonalData",
    action: "delete",
    possession: "any",
  })
  async deleteDoctorPersonalData(
    @graphql.Args() args: DeleteDoctorPersonalDataArgs
  ): Promise<DoctorPersonalData | null> {
    try {
      return await this.service.deleteDoctorPersonalData(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Query(() => String)
  async CreateDoctorPersonalData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateDoctorPersonalData(args);
  }

  @graphql.Mutation(() => DoctorPersonalData)
  async CreateDoctorPersonalDataEntry(
    @graphql.Args()
    args: DoctorPersonalDataCreateInput
  ): Promise<DoctorPersonalData> {
    return this.service.CreateDoctorPersonalDataEntry(args);
  }
}