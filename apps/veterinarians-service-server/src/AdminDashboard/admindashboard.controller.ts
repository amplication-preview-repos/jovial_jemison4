import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdminDashboardService } from "./admindashboard.service";

@swagger.ApiTags("adminDashboards")
@common.Controller("adminDashboards")
export class AdminDashboardController {
  constructor(protected readonly service: AdminDashboardService) {}

  @common.Get("/:id/create-doctor-list")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateDoctorList(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateDoctorList(body);
      }

  @common.Get("/:id/create-doctor-medical-records")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateDoctorMedicalRecords(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateDoctorMedicalRecords(body);
      }

  @common.Get("/:id/create-doctor-personal-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateDoctorPersonalData(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateDoctorPersonalData(body);
      }

  @common.Get("/:id/create-new-doctor-medical-records")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateNewDoctorMedicalRecords(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateNewDoctorMedicalRecords(body);
      }

  @common.Get("/:id/create-new-doctor-personal-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateNewDoctorPersonalData(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateNewDoctorPersonalData(body);
      }

  @common.Get("/:id/create-new-patient-treatment")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateNewPatientTreatment(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateNewPatientTreatment(body);
      }

  @common.Get("/:id/create-patient-treatment")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreatePatientTreatment(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreatePatientTreatment(body);
      }
}
