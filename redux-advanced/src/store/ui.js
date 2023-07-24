import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
    isCartOpen: true,
    notification: null,
};

const uiSlice = createSlice({
    name: "ui",
    initialState: initialUiState,
    reducers: {
        toggle(state) {
            state.isCartOpen = !state.isCartOpen;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                text: action.payload.text,
            };
        },
    },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
