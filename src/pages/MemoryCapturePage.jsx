import MemoryCaptureForm from "../components/Forms/MemoryCaptureForm";
import Header from "../components/Menu/Header";

function MemoryCapturePage() {

    return (
        <div>
            <Header />
            <div>
                <p>Enter all of the details that you can think of now, that will help you to recall the feeling,
                    motion, atmosphere, preparation, and outcome of the Sweet Shot.</p>
                <p>(Coming soon) You will have the opportunity to EDIT the memory details later, 
                    so add what you can for now, and then come back and revise the details later.</p>
            </div>
            <MemoryCaptureForm />
        </div>
    );
}

export default MemoryCapturePage;