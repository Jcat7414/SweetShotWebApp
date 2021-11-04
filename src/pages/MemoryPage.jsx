import { useState, useEffect }  from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Menu/Header";
import CaptureMemoryButton from "../components/Buttons/CaptureMemoryButton";
import ViewMemoryButton from "../components/Buttons/ViewMemoryButton";

function MemoryPage() {
    const [memoryData, setMemoryData] = useState([]);
    const { club, shot_date, is_current, course, weather, memory_details } = memoryData;
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}memory/${id}/`, {
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setMemoryData(data);
        });
    }, [id]);

    return (
        <div>
            <Header />
            <div>
                <h2>Club:</h2>
                <p>{ club }</p>
                <h3>Memory occured on { shot_date }</h3>
                <h3>{`Status: ${ is_current }`}</h3>
                <h3>Course: { course }</h3>
                <h3>Weather: { weather }</h3>
                <p>{ memory_details }</p>
                <Link to="memoryedit">Edit Memory</Link>
            </div>
            <CaptureMemoryButton />
            <ViewMemoryButton />
        </div>
    );
}

export default MemoryPage;