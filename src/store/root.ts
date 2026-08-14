import { FieldStore } from "./field";

export class RootStore {
    field: FieldStore;

    constructor() {
        this.field = new FieldStore();
    }
}

