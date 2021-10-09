import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <div><Link to="/">Home</Link></div>
            <div><Link to="capturememory/">Capture a Memory</Link></div>
            <div><Link to="/memorybank">View Memory Bank</Link></div>
            <div><Link to="/userprofile">User Profile</Link></div>
            <div><Link to="/settings">Settings</Link></div>
            <div><Link to="/instructions">Instructions</Link></div>
            <div><Link to="/about">About Sweet Shot</Link></div>
            <div><Link to="/contact">Contact Us</Link></div>
            <div><Link to="/facebook">Sweet Shot Facebook</Link></div>
            <Link to="/signout">Sign Out</Link>
        </div>
    );
}

export default Nav;