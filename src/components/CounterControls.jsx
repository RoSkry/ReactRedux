import React from "react";
import { connect } from "react-redux";
import { addOneAction } from "../redux/actions/counterActions";
import { minusOneAction } from "../redux/actions/counterActions";

class CounterControls extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.addOneProp}>+</button>
                <button onClick={this.props.minusOneProp}>-</button>
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

