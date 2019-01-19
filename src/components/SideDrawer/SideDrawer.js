import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {

    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer', 'open'];
    }

    return (
        <nav className={drawerClasses.join(' ')}>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/">REMODELING SERVICES</a></li>
                <li><a href="/">GALLERY</a></li>
                <li><a href="/">CONTACT US</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;