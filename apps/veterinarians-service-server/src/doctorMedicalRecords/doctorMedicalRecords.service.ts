import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DoctorMedicalRecordsServiceBase } from "./base/doctorMedicalRecords.service.base";

@Injectable()
export class DoctorMedicalRecordsService extends DoctorMedicalRecordsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
