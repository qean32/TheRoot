import { getRandom } from '@/lib/utils';
import type { linkType, tokenType } from '@/model';
import { makeAutoObservable } from 'mobx';

export class FieldStore {
    tokens: tokenType[] = []
    links: linkType[] = []

    constructor() {
        makeAutoObservable(this);
    }

    createToken(token: Omit<tokenType, "id">) {
        this.tokens.push({ ...token, id: getRandom() })
    }

    removeToken(id: number) {
        this.tokens.filter(item => item.id != id)
    }

    createLink(link: Omit<linkType, "id">) {
        if (link.tokens.length != 2) {
            return
        }

        this.links.push({ ...link, id: getRandom() })
    }

    removeLink(id: number) {
        this.links.filter(item => item.id != id)
    }

    changeToken() {
    }

    changeLink() {
    }
}
