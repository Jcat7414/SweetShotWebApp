import { Link } from "react-router-dom";

function MemoryCard(props) {
    const { memoryData } = props;
    return (
        <div className="memory-card">
            <Link to={`/memory/${memoryData.id}/`}>
                <h3>{memoryData.club}</h3>
                <h4>{memoryData.date_created}</h4>
                <h4>{memoryData.course}</h4>
            </Link>
        </div>
    );
}

export default MemoryCard;