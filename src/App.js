import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import Nav from "./Components/Nav/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav history={this.props.history} location={this.props.location} />
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
