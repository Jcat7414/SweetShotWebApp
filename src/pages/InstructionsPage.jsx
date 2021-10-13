import React from "react";
import Header from "../components/Menu/Header";
import SignInButton from "../components/Buttons/SignInButton";
import SignUpLink from "../components/Buttons/SignUpLink";
import CaptureMemoryButton from "../components/Buttons/CaptureMemoryButton";
import ViewMemoryButton from "../components/Buttons/ViewMemoryButton";


function InstructionsPage() {

    return (
        <div>
            <Header />
            <div>
                <h5>How Sweet Shot works</h5>
                <div className="instructions-list">
                    <ol>
                        <li>To create a <i>Sweet Shot</i> account</li>
                            <ul>
                                <li>Click 'Sign Up'</li>
                                <li>Enter your Email</li>
                                <li>Enter your Name</li>
                                <li>Enter a Password (minimum 8 characters)</li>
                                <li>Re-enter the password</li>
                                <li>Click the checkbox to accept the Terms and Conditions</li>
                                <li>Click 'Sign Up'</li>
                            </ul>
                        <li>To capture your first <i>Sweet Shot</i> memory</li>
                            <ul>
                                <li>Click 'Capture a Memory'</li>
                                <li>Select your Club</li>
                                <li>Select the Date of the shot</li>
                                <li>Enter the Course name</li>
                                <li>Select the Weather</li>
                                <li>Enter what you want to remember about your <i>Sweet Shot</i></li>
                                <li>Click 'Save Memory'</li>
                            </ul>
                        <li>To view a list of your <i>Sweet Shot</i> memories</li>
                            <ul>
                                <li>Click 'View Memory Bank'</li>
                                <li>(Coming soon) Choose your Filter options</li>
                                <li>Click Search</li>
                            </ul>
                        <li>To view the details of a Memory</li>
                            <ul>
                                <li>Click on the memory you want to view</li>
                            </ul>
                        <li>(Coming soon)To edit a Memory</li>
                            <ul>
                                <li>View the memory you want to edit</li>
                                <li>Select 'Edit Memory'</li>
                                <li>Edit the fields that you want to update</li>
                                <li>Click 'Save Memory'</li>
                                <li>If you change your mind, click 'Cancel'</li>
                            </ul>
                        <li>(Coming soon)To delete a memory</li>
                            <ul>
                                <li>View the memory you want to delete</li>
                                <li>Select 'Delete Memory'</li>
                                <li>Check you have selected the correct memory to delete</li>
                                <li>Click 'Confirm Delete Memory'</li>
                            </ul>
                    </ol>
                </div>
            </div>
            <SignInButton />
            <SignUpLink />
            <CaptureMemoryButton />
            <ViewMemoryButton />
        </div>
    );
}

export default InstructionsPage;