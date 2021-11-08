import { Link } from "react-router-dom";

function CaptureMemoryButton() {
    return (
        <div className="memory-button">
            <Link to="/memorycapture"><button id="primarybtn">Capture a Memory</button></Link>
        </div> 
    );
}

export default CaptureMemoryButton;