import React from "react";
import Bio from "../About/ShortBio";
import "./about.css";


const About_text_img:React.FC = () => {

    return (
        <div className="about-text-img row">
            <Bio />
        </div>
    )
};

export default About_text_img;