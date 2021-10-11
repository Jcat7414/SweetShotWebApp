import React, { useState, useEffect } from "react";
import MemoryCard from "../components/MemoryCard/MemoryCard";
import Header from "../components/Menu/Header";

function MemoryBankPage() {
    const [memoryList, setMemoryList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}memory/`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setMemoryList(data);
        });
    }, []);

    return (
        <div>
            <div>
            <Header />
            </div>
            <div id="memory-list">
                {memoryList.map((memoryData, key) => {
                    return <MemoryCard key={key} memoryData={memoryData} />;
                })}
            </div>
        </div>
    );
}

export default MemoryBankPage;