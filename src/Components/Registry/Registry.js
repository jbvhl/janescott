import React from "react";
import { Link } from "react-router-dom";

class Registry extends React.Component {
  render() {
    return (
      <div>
        <h1>Registry</h1>
        <button id="butt">
          <Link to="/home">Back</Link>
        </button>
      </div>
    );
  }
}

export default Registry;
