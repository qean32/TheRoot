import { FieldStore } from "./field";
import { TokenStore } from "./token";

export class RootStore {
    field: FieldStore;
    token: TokenStore;

    constructor() {
        this.field = new FieldStore();
        this.token = new TokenStore();
    }
}

