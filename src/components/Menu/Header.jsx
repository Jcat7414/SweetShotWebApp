import { Link } from "react-router-dom";
import Logo from "../../assets/sweet-shot-logo-cursive-horizontal.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const hamburger = <FontAwesomeIcon icon={faBars} />

// show variation based on signed in or not
    return (
        <div>
            <div className="logo-signed-out">
                <Link to="/"><img src={ Logo } width="200px" alt="Sweet Shot Logo"></img></Link>
            </div>
            <div>
                <p>capture the ones worth remembering</p>
            </div>
            <div className="logo-signed-in">
                <Link to="/"><img src={ Logo } width="200px" alt="Sweet Shot Logo"></img></Link>
                <div>
                    <p>capture the ones worth remembering</p>
                </div>
                <div>
                    <Link to="/menu">{ hamburger }</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;