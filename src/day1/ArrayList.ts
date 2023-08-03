export default class ArrayList<T> {
    public length: number;

    constructor() {}

    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {
        //Remove logic
        this.length--;
    }
    get(idx: number): T | undefined {
        if (idx >= this.length) return undefined;
    }
    removeAt(idx: number): T | undefined {}
}
