import React from "react";

class CounterView extends React.Component {
    render() {
        return (
            <div>
                {this.props.value}
            </div>
        );
    }

}

export default CounterView;