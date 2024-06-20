import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminDashboardService {
  constructor() {}
  async CreateDoctorList(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateDoctorMedicalRecords(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateDoctorPersonalData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateNewDoctorMedicalRecords(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateNewDoctorPersonalData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateNewPatientTreatment(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreatePatientTreatment(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
