import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.countdown();
  }

  countdown = () => {
    window.setInterval(() => {
      let date = new Date("feb 01, 2020").getTime(),
        current = new Date().getTime(),
        count = date - current,
        days = Math.floor(count / (1000 * 60 * 60 * 24)),
        hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((count % (1000 * 60)) / 1000);
      this.setState({ days, hours, minutes, seconds });
    }, 40);
  };

  render() {
    return (
      <>
        <div className="home">
          <h1>We're getting married!</h1>
          <div>
            <h2>
              Days: {this.state.days} Hours: {this.state.hours} Minutes:
              {this.state.minutes} Seconds: {this.state.seconds}
            </h2>
          </div>{" "}
        </div>
      </>
    );
  }
}

export default Home;
