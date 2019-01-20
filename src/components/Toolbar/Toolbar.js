import React, { Component } from "react";
import { Link } from "react-router-dom";

// automatically injects CSS
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

class Toolbar extends Component {
  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar_navigation">
          <div className="toolbar_toggle_btn">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <div className="toolbar_logo">
            <a href="/">AGE LOGO</a>
          </div>
          <div className="nav-space" />
          <div className="toolbar_nav-items">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <a href="/remodeling_services">REMODELING SERVICES</a>
              </li>
              <li>
                <a href="/gallery">GALLERY</a>
              </li>
              <li>
                <a href="/contact_us">CONTACT US</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Toolbar;
