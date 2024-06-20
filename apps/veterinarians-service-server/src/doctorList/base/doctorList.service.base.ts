/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DoctorList as PrismaDoctorList } from "@prisma/client";

export class DoctorListServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DoctorListCountArgs, "select">
  ): Promise<number> {
    return this.prisma.doctorList.count(args);
  }

  async doctorLists(
    args: Prisma.DoctorListFindManyArgs
  ): Promise<PrismaDoctorList[]> {
    return this.prisma.doctorList.findMany(args);
  }
  async doctorList(
    args: Prisma.DoctorListFindUniqueArgs
  ): Promise<PrismaDoctorList | null> {
    return this.prisma.doctorList.findUnique(args);
  }
  async createDoctorList(
    args: Prisma.DoctorListCreateArgs
  ): Promise<PrismaDoctorList> {
    return this.prisma.doctorList.create(args);
  }
  async updateDoctorList(
    args: Prisma.DoctorListUpdateArgs
  ): Promise<PrismaDoctorList> {
    return this.prisma.doctorList.update(args);
  }
  async deleteDoctorList(
    args: Prisma.DoctorListDeleteArgs
  ): Promise<PrismaDoctorList> {
    return this.prisma.doctorList.delete(args);
  }
}
