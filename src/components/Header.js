import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return <header>
        <div>
            <img alt="logo" className="logo-img" src="https://i.pinimg.com/originals/0c/a8/23/0ca823feb14779eb56f1d78bc3afb4fc.png"/>
            <nav className="nav-links">
                <Link to="/">Login</Link>
                <Link to="/welcome">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    </header>
}

export default Header;