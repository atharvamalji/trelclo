class Pos {
    private step: number;
    private initial: number;
    private bound: number;

    constructor() {
        this.step = 1024;
        this.initial = 16 * this.step;
        this.bound = this.initial + this.step;
    }

    public generate = () => {
        const pos = Math.floor(Math.random() * (this.bound - this.initial) + this.initial);
        return pos;
    };

    public generateNext = (posCurrent: number): number => {
        const pos = posCurrent + this.generate();
        return pos;
    };

    public generatePrevious = (posCurrent: number, posPrevious: number): number => {
        const pos = (posCurrent + posPrevious) / 2;
        return pos;
    };
}

export default Pos;
