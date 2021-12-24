export class Character {
    public name: string;
    public count: number;
    public label: string;

    constructor(init?:Character) {
        Object.assign(this, init)
    }
}