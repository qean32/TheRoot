import { FieldStore } from "./field";
import { FieldMenuStore } from "./field-menu";
import { SelectedTokenStore } from "./selected-token";

export class RootStore {
    field: FieldStore;
    fieldMenu: FieldMenuStore;
    selectedToken: SelectedTokenStore;

    constructor() {
        this.field = new FieldStore();
        this.fieldMenu = new FieldMenuStore();
        this.selectedToken = new SelectedTokenStore();
    }
}

