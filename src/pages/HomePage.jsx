import Logo from "../assets/sweet-shot-logo-cursive.svg";
import { Link } from "react-router-dom";
import SignUpLink from "../components/Buttons/SignUpLink";
import { Button } from "../components/Buttons/SignInButton";

function HomePage() {

    return (
        <div id="home-screen">
            <div className="sweet-shot-logo">
                <img src={ Logo } width="300px" alt="Sweet Shot Logo"></img>
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
            <div>
                <Link to="/instructions"><button id="primarybtn">How Sweet Shot works</button></Link>
            </div>
            <Button 
                // onClick={() => {console.log("You Clicked on Me!")}}
                buttonStyle="primarybtn"
                title="Sign In"
                link="/signin"
                type="button"
            ></Button>
            <SignUpLink />
        </div>
    );
}

export default HomePage;