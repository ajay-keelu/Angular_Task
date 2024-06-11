export class RoleDTO {
    id: number;
    jobTitleId: number;
    departmentId: number;
    locationId: number;
    description: string;
    isActive: boolean;
    constructor(args: any) {
        this.id = args.id ?? null;
        this.jobTitleId = args.jobTitleId ?? '';
        this.departmentId = args.departmentId ?? '';
        this.locationId = args.locationId ?? '';
        this.description = args.description ?? '';
        this.isActive = args.isActive ?? true;
    }
}