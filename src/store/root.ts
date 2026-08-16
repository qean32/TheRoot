import { FieldStore } from "./field";
import { SelectedTokenStore } from "./selected-token";

export class RootStore {
    field: FieldStore;
    selectedToken: SelectedTokenStore;

    constructor() {
        this.field = new FieldStore();
        this.selectedToken = new SelectedTokenStore();
    }
}

