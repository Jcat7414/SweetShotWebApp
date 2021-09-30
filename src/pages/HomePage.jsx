import React from "react";
import { allMemories } from "../data";
import MemoryCard from "../components/MemoryCard/MemoryCard";

function HomePage() {
    return (
        <div id="memory-list">
            {allMemories.map((memoryData, key) => {
                return <MemoryCard key={key} memoryData={memoryData} />;
            })}
        </div>
    );
}

export default HomePage;