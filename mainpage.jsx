
//mainpage.jsx
import React, { Component } from 'react';
import SubApp from './sappbar';
import pic1 from './pic1.png';
import './mainpage.css';

class Main extends Component {
    showWeatherAlert = () => {
        alert("Weather Alert: rain expected today!");
    };

    showNotification = () => {
        // You can use a library like react-toastify for better notifications
        alert("Notification: You have a new message!");
    };

    render() {
        return (
            <>
                <SubApp />
                <div className="main-container">
                    <div>
                        <img src={pic1} className='fstpic' alt="Weather" />
                    </div>
                    
                    <div className="button-container">
                        <h4 className='see'>Check Alert Here!!</h4>
                        <button className='alert-button' onClick={this.showWeatherAlert}>Weather Alert</button>
                        
                    </div>
                </div>
            </>
        );
    }
}

export default Main;
