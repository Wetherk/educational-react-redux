import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
    const isCartOpen = useSelector((state) => state.ui.isCartOpen);
    const notification = useSelector((state) => state.ui.notification);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }
        if (cart.changed) dispatch(sendCartData(cart));
    }, [cart, dispatch]);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    return (
        <>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.text}
                />
            )}
            <Layout>
                {isCartOpen && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
