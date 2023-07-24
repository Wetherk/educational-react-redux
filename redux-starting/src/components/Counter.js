import { useSelector, useDispatch, connect } from "react-redux";
import { Component } from "react";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
    const counter = useSelector((state) => state.counter.counter);
    const isVisible = useSelector((state) => state.counter.counterVisible);

    const dispatch = useDispatch();

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };
    const handleIncrement = () => {
        dispatch(counterActions.increment());
    };
    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    };

    const handleIncrease = () => {
        dispatch(counterActions.increase(5));
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {isVisible && <div className={classes.value}>{counter}</div>}
            <div className={classes.controls}>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleIncrease}>Increase by 5</button>
                <button onClick={handleIncrement}>Increment</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

class CounterClass extends Component {
    handleIncrement() {
        this.props.increment();
    }
    handleDecrement() {
        this.props.decrement();
    }
    toggleCounterHandler() {}

    render() {
        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div className={classes.value}>{this.props.counter}</div>
                <div className={classes.controls}>
                    <button onClick={this.handleDecrement.bind(this)}>
                        Decrement
                    </button>
                    <button onClick={this.handleIncrement.bind(this)}>
                        Increment
                    </button>
                </div>
                <button onClick={this.toggleCounterHandler.bind(this)}>
                    Toggle Counter
                </button>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: "increment" }),
        decrement: () => dispatch({ type: "decrement" }),
    };
};

export const ConnectedCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterClass);
