import React, { Component } from "react";
import './info.css';
import Date from '../Assets/date.png';

class Info extends Component {
    render() {
        return (
            <>
            <img id='date' src={Date} alt="SaveTheDate"/>
            </>
        )
    }
}

export default Info;