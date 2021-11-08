import { Link } from "react-router-dom";
import Logo from "../../assets/sweet-shot-logo-cursive-horizontal.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { UserContext } from "../../UserContext";

function Header() {
    const hamburger = <FontAwesomeIcon icon={faBars} />
    const { user } = useContext(UserContext);

// show menu button only if user is signed in
    return (
        <div>
            {user===null ? 
                <div className="header-signedout">
                    <Link to="/"><img src={ Logo } width="200px" alt="Sweet Shot Logo"></img></Link>
                    <p>capture the ones worth remembering</p>
                </div>
                :
                <div className="header-signedin">
                    <Link to="/"><img src={ Logo } width="200px" alt="Sweet Shot Logo"></img></Link>
                    <p>capture the ones worth remembering</p>
                    <Link to="/menu">{ hamburger }</Link>
                </div>
            }
            
        </div>
    );
}

export default Header;