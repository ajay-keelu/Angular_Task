export class Button {
    title: string;
    srcImg: string;
    altImg: string;
    actionMethod?: Function;
    fontColor: string;
    background: string;

    constructor(args: any) {
        args = !!args ? args : {};

        this.title = args.title ?? '';
        this.srcImg = args.srcImg ?? '';
        this.altImg = args.altImg ?? '';
        this.fontColor = args.fontColor ?? "";
        this.background = args.background ?? '';
    }
}