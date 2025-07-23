import React, { Component } from "react";
import '../App.css'; 

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }
    reset = () => {
        this.setState({ count: 0 });
    }
    render() {
        return (
            // <marquee behavior="scroll" direction="left" scrollamount="69">
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.increment}>Icrement</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </div>
            // </marquee>
        )
    }
}

export default Counter