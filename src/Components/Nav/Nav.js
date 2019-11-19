import React, { Component } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        {this.props.location.pathname !== "/" ? (
          <>
            <Link to="/rsvp">
              <h1>RSVP</h1>
            </Link>
            <Link to="/details">
              <h1>DETAILS</h1>
            </Link>
            <Link to="/story">
              <h1>OUR STORY</h1>
            </Link>
            <Link to="bridesmaids">
              <h1>BRIDESMAIDS</h1>
            </Link>
            <Link to="groomsmen">
              <h1>GROOMSMEN</h1>
            </Link>
            <Link to="registry">
              <h1>REGISTRY</h1>
            </Link>
          </>
        ) : null}
      </div>
    );
  }
}

export default Nav;
