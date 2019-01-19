import React, {Component} from 'react';

import Background from '../images/home-top-background.jpg';
import './Welcome.css';

var backgroundImg = {
    backgroundImage: `url(${Background})`
};

class Welcome extends Component {
    render () {
        return (
            <div className="home-subsections">
                <div className="welcome-section" >
                    <div className="container">
                        <h1>SEARCHING FOR NEW SIDING IN THE AKRON, FORT MORGAN, CO AREA?</h1>
                        <p>CALL TODAY FOR A FREE ESTIMATE</p>
                    </div>
                </div>
                
                <div className="about-section" >
                    <div className="about-text">
                        <h1>About Us</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;