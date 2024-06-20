import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PatientTreatmentServiceBase } from "./base/patientTreatment.service.base";

@Injectable()
export class PatientTreatmentService extends PatientTreatmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
