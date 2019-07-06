import React from "react";
import { connect } from "react-redux";
import { addOneAction } from "../redux/actions/counterActions";
import { minusOneAction } from "../redux/actions/counterActions";

class CounterControls extends React.Component {

    
    addPlus = () => {
        this.props.addOneProp();
    }

    addMinus = () => {
        this.props.minusOneProp();
    }
    render() {
        return (
            <div>
                <button onClick={this.addPlus}>+</button>
                <button onClick={this.addMinus}>-</button>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addOneProp: () => dispatch(addOneAction()),
        minusOneProp: () => dispatch(minusOneAction()),
    };
};


export default connect(null, mapDispatchToProps)(CounterControls);

