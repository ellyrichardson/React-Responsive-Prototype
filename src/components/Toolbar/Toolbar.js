import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

// automatically injects CSS 
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Home from '../Home/Home';
import './Toolbar.css'; 

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle_btn">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/">AGE LOGO</a></div>
            <div className="nav-space"></div>
            <div className="toolbar_nav-items">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/">REMODELING SERVICES</a></li>
                    <li><a href="/">GALLERY</a></li>
                    <li><a href="/">CONTACT US</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

class Toolbar extends Component {
    render() {
        return (
            <header className="toolbar">
                <nav className="toolbar_navigation">
                    <div className="toolbar_toggle_btn">
                        <DrawerToggleButton click={this.props.drawerClickHandler}/>
                    </div>
                    <div className="toolbar_logo"><a href="/">AGE LOGO</a></div>
                    <div className="nav-space"></div>
                    <div className="toolbar_nav-items">
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li><a href="/remodeling_services">REMODELING SERVICES</a></li>
                            <li><a href="/gallery">GALLERY</a></li>
                            <li><a href="/contact_us">CONTACT US</a></li>
                        </ul>
                    </div>
                </nav>
                <Route exact path="/" component={Home} />
            </header>
        );
    }
}

export default Toolbar;