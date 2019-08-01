import React, { Component } from "react";
import './home.css';
import Nav from "../Nav/Nav";

class Home extends Component {
    render() {
        return (
            <>
            <Nav/>
            <div className='home'>
                <h1>We're getting married!</h1>
                <button>Reserve Here</button>
            </div>
            </>
        )
    }
}

export default Home;