import { useDispatch, useSelector } from "react-redux";

import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui";

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartItemsAmount = useSelector((state) => state.cart.productsAmount);

    const handleCartClick = () => {
        dispatch(uiActions.toggle());
    };
    return (
        <button onClick={handleCartClick} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartItemsAmount}</span>
        </button>
    );
};

export default CartButton;
