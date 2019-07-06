import React from "react";

class CounterControls extends React.Component {

    
    render() {
        return (
            <div>
                <button onClick={this.addPlus}>+</button>
                <button onClick={this.addMinus}>-</button>
            </div>
        );
    }
}

export default CounterControls;

