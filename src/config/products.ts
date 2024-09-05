// good convention when dealing with options that users have, that way we can
// just change the cost here and the user options logic stays the same for
// option-validator
// note: the price values are listed as CENTS so where we display them, we need
// to divide by 100
export const PRODUCT_PRICES = {
    material: {
        silicone: 0,
        polycarbonate: 5_00,
    },
    finish: {
        smooth: 0,
        textured: 3_00,
    }
} as const;

export const BASE_PRICE = 14_00;

