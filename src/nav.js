import React from 'react';
import './nav.css';
import logo from './logo.png';

const Nav = () => {

    return (

        <ul className="topnav">
            <li><a className="home" href="#home"><img className="img-responsive" src={logo} alt="logo"/></a></li>
            <li><a className="link" href="#departments">Departments</a></li>
            <li className="right"><a class="link" href="#about">About</a></li>
        </ul>

    );
}

export default Nav;