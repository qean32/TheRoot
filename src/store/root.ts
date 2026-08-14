import { PointStore } from "./point";

export class RootStore {
    pointStore: PointStore;

    constructor() {
        this.pointStore = new PointStore();
    }
}

