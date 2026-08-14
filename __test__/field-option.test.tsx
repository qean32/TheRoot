/// <reference types="jest" />

import { FieldStore } from "@/store/field"

test('field-option', () => {
    const field = new FieldStore()

    field.createToken({
        img: "zxc"
    })

    expect(field.tokens.length).toBe(1)
})
