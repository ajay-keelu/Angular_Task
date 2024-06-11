import { Status } from "../enums/enums";

export class EmployeeDTO {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    image: string;
    email: string;
    mobile: string;
    roleId: number;
    departmentId: number;
    locationId: number;
    managerId?: number;
    projectId?: number;
    joiningDate: Date;
    status: Status;
    isActive: boolean;
    constructor(args: any) {
        this.id = args.id ?? null;
        this.firstName = args.firstName ?? '';
        this.lastName = args.lastName ?? '';
        this.dateOfBirth = args.dateOfBirth ?? '';
        this.image = args.image ?? "";
        this.email = args.email ?? "";
        this.mobile = args.mobile ?? "";
        this.roleId = args.roleId ?? '';
        this.departmentId = args.departmentId ?? '';
        this.locationId = args.locationId ?? '';
        this.managerId = args.managerId ?? '';
        this.projectId = args.managerId ?? '';
        this.joiningDate = args.joiningDate ?? '';
        this.status = args.status ?? 1;
        this.isActive = args.isActive ?? true;
    }
}