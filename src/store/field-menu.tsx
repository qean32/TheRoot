import type { FieldMenuType } from '@/config';
import { makeAutoObservable } from 'mobx';

export class FieldMenuStore {
    button: FieldMenuType | null = null

    constructor() {
        makeAutoObservable(this);
    }

    setToken(button: FieldMenuType) {
        this.button = button
    }

    resetToken() {
        this.button = null
    }
}
