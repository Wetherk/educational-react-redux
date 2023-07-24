import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    productsAmount: 0,
    products: [],
    changed: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        setCart(state, action) {
            console.log(action);
            state.products = action.payload.products;
            state.productsAmount = action.payload.productsAmount;
        },

        addProduct(state, action) {
            let isDuplicate = false;

            state.products = state.products.map((product) => {
                if (product.id === action.payload.id) {
                    isDuplicate = true;
                    product.quantity++;
                    product.total = product.quantity * product.price;
                    return product;
                }

                return product;
            });

            if (!isDuplicate) {
                const product = action.payload;
                product.quantity = 1;
                product.total = product.quantity * product.price;

                state.products.push(product);
            }

            state.productsAmount++;
            state.changed = true;
        },

        removeProduct(state, action) {
            state.products = state.products
                .map((product) => {
                    if (product.id === action.payload) {
                        product.quantity--;
                        product.total = product.quantity * product.price;
                        return product;
                    }
                    return product;
                })
                .filter((product) => product.quantity > 0);

            state.productsAmount--;
            state.changed = true;
        },
    },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
