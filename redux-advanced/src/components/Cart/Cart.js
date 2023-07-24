import { useDispatch, useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { cartActions } from "../../store/cart";

const Cart = (props) => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart.products);

    const handleRemove = (id) => {
        dispatch(cartActions.removeProduct(id));
    };

    const handleAdd = (product) => {
        dispatch(cartActions.addProduct(product));
    };
    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartProducts.map(({ id, title, quantity, total, price }) => (
                    <CartItem
                        key={id}
                        onRemove={handleRemove}
                        onAdd={handleAdd}
                        item={{
                            id,
                            title,
                            quantity,
                            total,
                            price,
                        }}
                    />
                ))}
            </ul>
        </Card>
    );
};

export default Cart;
