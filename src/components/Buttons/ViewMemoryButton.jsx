import React from "react";
import { Link } from "react-router-dom";

function ViewMemoryButton() {
    return (
        <div>
            <Link to="/memorybank"><button id="secondarybtn">View Memory Bank</button></Link>
        </div> 
    );
}

export default ViewMemoryButton;