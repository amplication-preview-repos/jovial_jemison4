import * as graphql from "@nestjs/graphql";
import { AdminDashboardService } from "./admindashboard.service";

export class AdminDashboardResolver {
  constructor(protected readonly service: AdminDashboardService) {}

  @graphql.Query(() => String)
  async CreateDoctorList(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateDoctorList(args);
  }

  @graphql.Query(() => String)
  async CreateDoctorMedicalRecords(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateDoctorMedicalRecords(args);
  }

  @graphql.Query(() => String)
  async CreateDoctorPersonalData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateDoctorPersonalData(args);
  }

  @graphql.Query(() => String)
  async CreateNewDoctorMedicalRecords(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateNewDoctorMedicalRecords(args);
  }

  @graphql.Query(() => String)
  async CreateNewDoctorPersonalData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateNewDoctorPersonalData(args);
  }

  @graphql.Query(() => String)
  async CreateNewPatientTreatment(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateNewPatientTreatment(args);
  }

  @graphql.Query(() => String)
  async CreatePatientTreatment(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreatePatientTreatment(args);
  }
}
