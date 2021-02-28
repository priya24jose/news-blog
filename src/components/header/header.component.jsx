import React from 'react';
import './header.styles.scss';

const Header = () => (
    <div className = "header" >
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/trending">TRENDING </Link> 
            <Link className="option" to="/archieve">ARCHIEVE </Link> 
            <Link className="option" to="/contactus">CONTACT US </Link> 
        </div>
    </div>
    
)

export default Header;
