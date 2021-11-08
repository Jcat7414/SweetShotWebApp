import { Link } from "react-router-dom";

const STYLES = [
    "darkLink",
    "lightLink",
]

export const Links = (
    {
        link,
        linkStyle,
        children,
    } ) => {

    const checkLinkStyle = 
    STYLES.includes(linkStyle) ?
    linkStyle :
    STYLES[0]
    ;

    return (
    <div>
        <Link to={link} className={`${checkLinkStyle}` }>
            {children}
        </Link>
    </div>
    )
};