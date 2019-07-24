import React, { Component } from "react";
import './info.css';
import Date from '../Assets/janesavethedate.png';
import Photo from '../Assets/Couple/a.jpg'

class Info extends Component {
    render() {
        return (
            <div className='info'>
            <img id='date' src={Date} alt="info"/>
            <img id='photo' src={Photo} alt=''/>
            </div>
        )
    }
}

export default Info;