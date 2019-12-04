import React from 'react';
import './DrawerToggle.css';

const drawerToggel = (props) => (
    <div className="DrawerToggle" onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggel;