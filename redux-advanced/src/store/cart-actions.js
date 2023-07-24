import { uiActions } from "./ui";
import { cartActions } from "./cart";

export const sendCartData = (cart) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch("http://localhost:3001/cart/1", {
                method: "PUT",
                body: JSON.stringify(cart),
                headers: { "Content-Type": "application/json" },
            });
            if (!response.ok) throw new Error("Sending data failed");

            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Success",
                    text: "Data sent successfully",
                })
            );
        };

        dispatch(
            uiActions.showNotification({
                status: "Pending",
                title: "Please wait",
                text: "Sending cart data",
            })
        );
        try {
            await sendRequest();
        } catch (e) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error",
                    text: e.message,
                })
            );
        }
    };
};

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3001/cart/1", {
                method: "GET",
            });

            if (!response.ok) throw new Error("Fetching data failed");

            const data = await response.json();
            return data;
        };

        try {
            const cart = await fetchData();
            dispatch(cartActions.setCart(cart));
        } catch (e) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error",
                    text: e.message,
                })
            );
        }
    };
};
