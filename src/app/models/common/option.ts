export class Option {
    key: number;
    label: string;

    constructor(arg: any) {
        this.key = arg.key ?? 0;
        this.label = arg.label ?? '';
    }
}