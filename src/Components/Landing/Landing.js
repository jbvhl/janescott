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

  render() {
    return (
      <div className="Landing">
        <h1>CONGRATULATIONS JANE & SCOTT</h1>
        <h2>MR & MRS</h2>
        <div className="Enter">
          <input
            id="input"
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />
          <br />
          <button>Enter</button>
        </div>
        <p>cool wedding site</p>
        <img
          alt="pic"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8rEmU-ruIn1lRqaxZIziwcpZcTH6d9m_zVevdyU4y8pnhgPGI"
        />
      </div>
    );
  }
}
