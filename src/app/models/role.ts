export class Role {
    id: number;
    name: string;
    department: string;
    location: string;
    description: string;
    isActive: boolean;
    constructor(args: any) {
        this.id = args.id ?? null;
        this.name = args.name ?? '';
        this.department = args.department ?? '';
        this.location = args.location ?? '';
        this.description = args.description ?? '';
        this.isActive = args.isActive ?? true;
    }
}