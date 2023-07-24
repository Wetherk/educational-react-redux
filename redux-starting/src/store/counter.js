import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    counterVisible: true,
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.counterVisible = !state.counterVisible;
        },
    },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
