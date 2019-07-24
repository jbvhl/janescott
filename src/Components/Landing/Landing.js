import React, { Component } from "react";
import "./landing.css";
import axios from "axios";

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

  login = async () => {
    let res = await axios.post('/auth/login', {password: this.state.password})
    console.log(res.data)
    if (res.data) {
      this.props.history.push('/home')
    }
  };

  render() {
    return (
      <div className="Landing">
      <p id='sig'>Made with love and many happy wishes -Jennifer</p>
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
