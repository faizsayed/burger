import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../sideDrawer/DrawerToggel/DrawerToggle';

const toolbar = (props) => (
    <header className="Toolbar">
        <div>
            <DrawerToggle clicked={props.open} />
        </div>
        <div className="Logo">
            <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;