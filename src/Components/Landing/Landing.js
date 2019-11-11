import React, { Component } from "react";
import "./landing.css";

export default class Landing extends Component {
  constructor() {
    super();

    this.state = {
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    this.setState({
      password: val
    });
  }

  login = () => {
    if (this.state.password === "TOAST") {
      this.props.history.push("/home");
    }
  };

  render() {
    return (
      <div className="Landing">
        <p id="sig">Made with love and many happy wishes -Jennifer</p>
        <h1>JANE + SCOTT</h1>
        <div className="Enter">
          <input
            id="input"
            onChange={e => this.handleChange(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <br />
          <button onClick={this.login}>Enter</button>
        </div>
      </div>
    );
  }
}
