import type { tokenType } from '@/model';
import { makeAutoObservable } from 'mobx';

export class TokenStore {
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
