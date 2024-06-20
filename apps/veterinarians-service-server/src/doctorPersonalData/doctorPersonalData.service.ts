import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DoctorPersonalDataServiceBase } from "./base/doctorPersonalData.service.base";

@Injectable()
export class DoctorPersonalDataService extends DoctorPersonalDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
