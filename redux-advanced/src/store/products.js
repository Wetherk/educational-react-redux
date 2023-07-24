import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = {
    products: [
        {
            id: "product1",
            title: "Test",
            description: "This is a first product - amazing!",
            price: 60,
        },
        {
            id: "product2",
            title: "Test333",
            description: "This is a first product - amazing!",
            price: 100,
        },
    ],
};
const productsSlice = createSlice({
    name: "products",
    initialState: initialProductsState,
    reducers: {},
});

export default productsSlice.reducer;
export const productsActions = productsSlice.actions;
