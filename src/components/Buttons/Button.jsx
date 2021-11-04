import { Link } from "react-router-dom";

// const BUTTONNAMES = [
//     "instructions",
//     "signIn",
//     "signInForm",
//     "signUp",
//     "signUpForm",
//     "capture",
//     "saveMemory",
//     "cancel",
//     "view",
//     "editMemory",
//     "signOut",
// ]

const STYLES = ["primarybtn", "secondarybtn", "tertiarybtn"];

// let instructions = { title: "How Sweet Shot works", type: "button", link: "/instructions" }
// let signIn = { title: "Sign In", type: "button", link: "/signin" }
// let signInForm = { title: "Sign In", type: "submit", link: "" }

// let signUp = { title: "Sign Up", type: "button", link: "/signup" }
// let signUpForm = { title: "Sign Up", type: "submit", link: "" }

// let capture = { title: "Capture a Memory", type: "button", link: "/memorycapture" }
// let saveMemory ={ title: "Save Memory", type: "submit", link: "" }
// let cancel = { title: "Cancel", type: "cancel", link: "" }

// let view = { title: "View Memory Bank", type: "button", link: "/memorybank" }
// let editMemory = { title: "Edit Memory", type: "submit", link: "" }

// let signOut = { title: "Sign Out", type: "button", link: "/signout" }

export const Button = ({
	onClick,
	buttonStyle,
	title,
	link,
	children,
	type,
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];
	// const checkButtonName =
	// BUTTONNAMES.includes(buttonName) ?
	// buttonName :
	// BUTTONNAMES[0]
	// ;

	return (
			<button
				type={type || "button"}
				className={buttonStyle ? `btn ${checkButtonStyle}` : STYLES[0]}
				onClick={onClick}
			>
				{link ? (
					<Link to={link} className="buttonLink">
						{children}
					</Link>
				) : (
					children
				)}
			</button>	
	);
};
