/// <reference types="jest" />

import { PointStore } from "@/store/point"

test('points', () => {
    const store = new PointStore

    store.push({
        id: 1,
        img: "zxc"
    })

    expect(store.points.length).toBe(1)
})
