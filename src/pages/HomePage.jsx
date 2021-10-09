import React, { useState, useEffect } from "react";
import Logo from "../assets/sweet-shot-logo-cursive.svg";
import { Link } from "react-router-dom";

function HomePage() {

    return (
        <div id="home-screen">
            <div className="sweet-shot-logo">
                <img src={ Logo } width="300px"></img>
                <p>capture the ones worth remembering</p>
            </div>
            <div className="purpose-paragraph">
                <p>Whether you are a beginner or a professional, 
                one of the best ways to hit a sweet golf shot, 
                is to believe that you will.</p>
                <p>It is easier to believe if you have actually done it before. 
                Confidence grows when you can recall hitting a sweet shot 
                in a similar setting and situation in the past.</p>
                <p><i>Sweet Shot</i> gives you a simple, easy way to capture 
                your memory of a shot...the lie, the weather, the course, 
                and the club that you used.</p>
                <p>The action of recording the details may be enough to help 
                you recall them anytime you pull that club from your bag, 
                however, it is also super easy to filter and retrieve the 
                most appropriate memory via your phone, using <i>Sweet Shot</i>.</p>
                <p>Happy Golfing!</p>
            </div>
            <div className="instructions-button">
                <Link to="/instructions"><button className="button-full-width-primary">How Sweet Shot works</button></Link>
            </div>
            <div className="sign-in-button">
                <Link to="/signin"><button className="button-full-width-secondary">Sign In</button></Link>
                <Link to="/signup">New? Sign Up</Link>
            </div>
        </div>
    );
}

export default HomePage;