import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    const ulStyle = {
        listStyleType: "none",
        display: "flex",
        gap: "10px",
        padding: 0,
    }

    return (
        <nav>
            <ul style={ulStyle}> 
                <li><Link to="/">Dashboard</Link></li> 
                <li><Link to="/profile">Profile</Link></li> 
                {isAuthenticated ? ( 
                    <li><Link to="/logout">Logout</Link></li>
                ) : ( 
                    <li><Link to="/login">Login</Link></li>
                )} 
            </ul> 
        </nav> 
    );
}

export default Nav;