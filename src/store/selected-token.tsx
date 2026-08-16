import type { tokenType } from '@/model';
import { makeAutoObservable } from 'mobx';

export class SelectedTokenStore {
    token: tokenType | null = null

    constructor() {
        makeAutoObservable(this);
    }

    setToken(token: tokenType) {
        this.token = token
    }

    resetToken() {
        this.token = null
    }
}
