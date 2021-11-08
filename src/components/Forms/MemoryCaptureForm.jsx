import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function MemoryCaptureForm() {
    const [memory, setNewMemory] = useState({
        "club": "",
        "shot_date": "",
        "course": "",
        "weather": "",
        "memory_details": "",
        "is_current": true,
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setNewMemory((prevMemory) => ({
            ...prevMemory,
            [id]: value,
        }));
    }

    const history = useHistory();

    const postData = async() => {
        const token = window.localStorage.getItem('token')

        const response = await fetch (
            `${process.env.REACT_APP_API_URL}memory/`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(memory),
            }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData()
        .then((response) => {
            window.localStorage.setItem("memory_id", response.id);
            window.localStorage.setItem("club", memory.club);
            history.push("/memorybank");
        });
    };

    const handleCancel = (e) => {
        e.preventDefault();
        history.push("/memorybank");
        window.location.reload(true);
    };

    return (
        <form>
            <div>
                <p>You need to be Signed In to create a Memory.</p>
                <Link to="/signin">Sign In here</Link> or <Link to="/signup">Sign Up now</Link>
            </div>
            <div>
                <div>
                    <label htmlFor="club">Club</label>
                        <input 
                            type="text"
                            id="club"
                            placeholder="Enter the club used"
                            required
                            onChange={handleChange}
                        />
                </div>
                <div>
                    <label htmlFor="shot_date">Shot Date</label>
                        <input
                            type="date"
                            id="shot_date"
                            placeholder="Enter the date of the Sweet Shot"
                            onChange={handleChange}
                        />
                </div>
                <div>
                    <label htmlFor="course">Course</label>
                        <input
                            type="text"
                            id="course"
                            placeholder="Where were you playing"
                            onChange={handleChange}
                        />
                </div>
                <div>
                    <label htmlFor="weather">Weather</label>
                        <input
                            type="text"
                            id="weather"
                            placeholder="What was the weather like"
                            onChange={handleChange}
                        />
                </div>
                <div>
                    <label htmlFor="memory_details">Details</label>
                        <input
                            type="text"
                            id="memory_details"
                            placeholder="What do you want to remember about this Sweet Shot?<br/>
                            For example:<br/>
                            The lie of the ball<br/>
                            Who you were with<br/>
                            Any sounds or smells<br/>
                            The way you gripped the club<br/>
                            How much backswing you used<br/>
                            What were you thinking about (or not)<br/>
                            How did it feel<br/>
                            What was the outcome"
                            onChange={handleChange}
                        />
                </div>

                <div>
                    <button type="submit" onClick={handleSubmit}>Save Memory</button>
                    <button type="cancel" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
            <br/>
            <p>Club: {memory.club} </p>
            <p>Shot Date: {memory.shot_date}</p>
            <p>Course: {memory.course}</p>
            <p>Weather: {memory.weather}</p>
            <p>Memory Details: {memory.memory_details}</p>
            <p>Date Created: {memory.date_created}</p>
            <p>Date Amended: {memory.date_amended}</p>
            <p>Current: {memory.is_current ? "true" : "false"}</p>
        </form>
    );
}

export default MemoryCaptureForm;