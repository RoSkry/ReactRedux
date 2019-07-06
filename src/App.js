import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { changeNameAction } from "./redux/actions/appActions";
import CounterControls from "./components/CounterControls";
import CounterView from "./components/CounterView";

class App extends React.Component {
  state = { value: "" };

  changeValue = e => {
    this.setState({ value: e.target.value });
  };

  submitValue = () => {
    const { value } = this.state;

    this.props.changeNameProp(value);
  };

  

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input value={value} onChange={this.changeValue} />
          <button onClick={this.submitValue}>submit</button>
          <h1>{this.props.name}</h1>
          <CounterView />
          <CounterControls />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.appReducer.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeNameProp: value => dispatch(changeNameAction(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
