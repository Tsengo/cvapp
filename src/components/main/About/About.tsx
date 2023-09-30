import React from "react";
import "../../../App.css";
import TextImg from "./About_text_img";
import "./about.css";

interface AboutMe {
    head: String;
    text: String
}

const AboutMeContent: AboutMe[] = [
    {
        head: "About",
        text: "I am Front-end developer with 2 years of experience, and I am not afraid any challenges. I like to learn new things, mostly about programming languages. I am self motivated person and do everything to reach maximum in my life."
    }
]

const About: React.FC = () => {
    return (
        <div id="About-Scroll" className="About column">
            {AboutMeContent.map((data) => (
                <>
                    <h1>{ data.head }</h1>
                    <p>{ data.text }</p>
                </>
            ))}
            <TextImg />
        </div>
    )
};

export default About;