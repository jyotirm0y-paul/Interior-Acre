import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="nav">
            <h2>ROKOMARY</h2>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/order">Order</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    
                    
                    
                    <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <div className="title-container">
            </div>
        </div>
    );
};

export default Header;