import React from "react";
import "../../../App.css";
import BioList from "./BioList";
import "./about.css";

const Bio = () => { 

    return (
        <div className="short-bio column">
            <h2 >
                Front-end Web Developer
            </h2>
            <p >
              I am from Georgia, when i finished school started to learn
              programming and first language was HTML and CSS, it was about 5
              years ago, but never worked in company to improve my skills, and
              now I think i know much to start work with small or basic
              projects.
            </p>
            <BioList />
        </div>
    )
};

export default Bio;