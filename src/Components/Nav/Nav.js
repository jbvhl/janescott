import React, { Component } from "react";
import "./nav.css";
// import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <h1>INFO</h1>
        <h1>OUR STORY</h1>
        <h1>BRIDESMAIDS</h1>
        <h1>GROOMSMEN</h1>
        <h1>REGISTRY</h1>
      </div>
    );
  }
}

export default Nav;
