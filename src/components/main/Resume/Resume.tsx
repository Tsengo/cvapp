import React from 'react';
import "../../../App.css";
import "./resume.css";
import Summary from './Summary'; // Update the import path
import Education from './Education'; // Update the import path
import Professions from './Professions'; // Update the import path

const Resume: React.FC = () => {
    return (
        <div className="resume-wrap column" id='ResumeScroll'>
            <div className="Resume column">
                <h1>Resume</h1>
                <p>
                    I have a lot of experience working with teams, but in different
                    professions. I know English (B1) and Russian (A2).
                </p>
            </div>
            <div className="long-resume row">
                <div className="column-wrap column">
                    <Summary />
                    <Education />
                </div>
                <Professions />
            </div>
        </div>
    )
}

export default Resume;
