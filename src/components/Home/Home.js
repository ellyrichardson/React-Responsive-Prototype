import React, {Component} from 'react';

import Welcome from './Welcome/Welcome';
import About from './About/About';

import './Home.css';

class Home extends Component {
    render () {
        return (
            <div className="home-section">
                <Welcome />
            </div>
        );
    }
}

export default Home;