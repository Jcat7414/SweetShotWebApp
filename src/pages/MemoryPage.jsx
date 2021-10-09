import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom";

function MemoryPage() {
    const [memoryData, setMemoryData] = useState([]);
    const { id } = useParams();
    console.log(id)
    console.log(memoryData)

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
            <h2>Club:</h2>
            <p>{ memoryData.club }</p>
            <h3>Memory occured on { memoryData.shot_date }</h3>
            <h3>{`Status: ${ memoryData.is_current }`}</h3>
            <h3>Course: { memoryData.course }</h3>
            <h3>Weather: { memoryData.weather }</h3>
            <p>{ memoryData.memory_details }</p>
        </div>
    );
}

export default MemoryPage;