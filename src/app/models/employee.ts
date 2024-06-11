import { Status } from "../enums/enums";

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  image?: string;
  email: string;
  mobile?: number;
  role: string;
  department: string;
  location: string;
  manager?: string;
  project?: string;
  joiningDate: Date;
  status: Status;
  isActive: boolean;
  constructor(args: any) {
    this.id = args.id ?? 12;
    this.firstName = args.firstName ?? '';
    this.lastName = args.lastName ?? '';
    this.dateOfBirth = args.dateOfBirth ?? '';
    this.image = args.image ?? "";
    this.email = args.email ?? "";
    this.mobile = args.mobile ?? "";
    this.role = args.role ?? '';
    this.department = args.departmentId ?? '';
    this.location = args.locationId ?? '';
    this.manager = args.managerId ?? '';
    this.project = args.managerId ?? '';
    this.joiningDate = args.joiningDate ?? '';
    this.status = args.status ?? 1;
    this.isActive = args.isActive ?? true;
  }
}