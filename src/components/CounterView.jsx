import React from "react";
import { connect } from "react-redux";

class CounterView extends React.Component {
    render() {
        return (
            <div>
                {this.props.value}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        value: state.counterReducer.value
    };
};

export default connect(mapStateToProps)(CounterView);