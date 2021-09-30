import React  from "react";
import { oneMemory } from "../data";

function MemoryPage() {
    return (
        <div>
            <h2>{oneMemory.club}</h2>
            <h3>Memory captured on {oneMemory.date_created}</h3>
            <h3>{`Status: ${oneMemory.is_current}`}</h3>
            <h3>Course: {oneMemory.course}</h3>
            <h3>Weather: {oneMemory.weather}</h3>
            <p>{oneMemory.memory_details}</p>
        </div>
    );
}

export default MemoryPage;