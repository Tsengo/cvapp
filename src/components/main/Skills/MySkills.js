import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import "./skills.css"

const MySkills = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    })
    return (
        <div data-aos="fade-up" className='my_skills row'>
            <ul className='column'>
                <li><span className='HTML'></span>HTML</li>
                <li><span className='CSS'></span>CSS</li>
                <li><span className='PYTHON'></span>PYTHON</li>
            </ul>
            <ul className='column'>
                <li><span className='REACT'></span>REACT</li>
                <li><span className='VUE'></span>VUE</li>
                <li><span className='JAVASCRIPT'></span>JAVASCRIPT</li>
            </ul>
        </div>
    )
}
export default MySkills;