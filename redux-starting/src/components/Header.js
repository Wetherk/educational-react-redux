import { useDispatch, useSelector } from "react-redux";

import classes from "./Header.module.css";
import { authActions } from "../store/auth";

const Header = () => {
    const dispatch = useDispatch();

    const handleLogoutClick = () => {
        dispatch(authActions.logout());
    };

    const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>

            {isAuthenticated && (
                <nav>
                    <ul>
                        <li>
                            <a href="/">My Products</a>
                        </li>
                        <li>
                            <a href="/">My Sales</a>
                        </li>
                        <li>
                            <button onClick={handleLogoutClick}>Logout</button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
