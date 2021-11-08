import { Link } from "react-router-dom";
import Logo from "../../assets/sweet-shot-logo-cursive-horizontal.svg";

function Menu() {
    return (
        <div>
            <div><Link to="/"><img src={ Logo } width="200px" alt="Sweet Shot Logo" /></Link></div>
            <div><Link to="memorycapture/">Capture a Memory</Link></div>
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

export default Menu;