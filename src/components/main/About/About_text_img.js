import React,{useEffect} from "react";
import Bio from "../About/ShortBio";
import Aos from "aos";
import "aos/dist/aos.css";
import "./about.css";

const About_text_img = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    })
    return (
        <div className="about-text-img row">
            {/* <div  data-aos="fade-right" className="image"></div> */}
            <Bio />
        </div>
    )
};

export default About_text_img;