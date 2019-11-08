import React, { Component } from "react";
import './home.css';
import Nav from "../Nav/Nav";

class Home extends Component {
    countdown = () => {
        let date = new Date('feb 01, 2020').getTime();
        console.log(date);
    }
    render() {
        return (
            <>
            <Nav/>
            <div className='home'>
                <h1>We're getting married!</h1>
                <button onClick={this.countdown}>Countdown</button>
            </div>
            </>
        )
    }
}

export default Home;