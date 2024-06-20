import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DoctorListServiceBase } from "./base/doctorList.service.base";

@Injectable()
export class DoctorListService extends DoctorListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
