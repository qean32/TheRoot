import type { Point } from '@/model/point.type';
import { makeAutoObservable } from 'mobx';

export class PointStore {
    points: Point[] = []

    constructor() {
        makeAutoObservable(this);
    }

    push(point: Point) {
        this.points.push(point)
    }
}
