import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  componentDidMount() {
    this.countdown();
  }

  countdown = () => {
    let date = new Date("feb 01, 2020").getTime(),
      current = new Date().getTime(),
      count = date - current,
      days = Math.floor(count / (1000 * 60 * 60 * 24)),
      hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60)),
      seconds = Math.floor((count % (1000 * 60 * 60)) / 1000);

    return (
      <div>
        <h2>
          Day:{days} Hr:{hours} Min:{minutes} Sec: {seconds}
        </h2>
      </div>
    );
  };

  render() {
    return (
      <>
        <div className="home">
          <h1>We're getting married!</h1>
          {this.countdown()}
        </div>
      </>
    );
  }
}

export default Home;
