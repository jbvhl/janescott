import React, { Component } from "react";
import './info.css';
import Date from '../Assets/janesavethedate.png';
import Photo from '../Assets/Couple/a.jpg'
import {Link} from 'react-router-dom';

class Info extends Component {
    render() {
        return (
            <div className='info'>
                <button id='butt'><Link to='/home'>Back</Link></button>
            <img id='date' src={Date} alt="info"/>
            <img id='photo' src={Photo} alt=''/>
            </div>
        )
    }
}

export default Info;