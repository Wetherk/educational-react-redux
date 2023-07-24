import { useSelector, useDispatch } from "react-redux";

import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { cartActions } from "../../store/cart";

const Products = (props) => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(cartActions.addProduct(product));
    };

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {products.map(({ id, title, description, price }) => (
                    <ProductItem
                        onAddToCart={handleAddToCart}
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
