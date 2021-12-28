export class Bulb {
    static id = 0;
    id: number;
    constructor(public color: string,
        private isIlluminated: boolean) {
            this.id = Bulb.id++;
            this.color = color;
            this.isIlluminated = isIlluminated;
        }
}