import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import "./resume.css";
import "./education.css"

const Summary = () => {
    useEffect(() => {
        Aos.init({duration:1400})
    })
    return (
        <div className="education column">
            <h2 data-aos="fade-up">Education</h2>
            <div className='list-edu column'>
                <h3 data-aos="fade-up">Front-end Web developer</h3>
                <p data-aos="fade-up">Academy Of Digital Industry (2022/APR-2022/NOV)</p>
                <p data-aos="fade-up">In this academy we created several projects and learnt a lot, about programming, I learnt HTML and CSS again and improve my skills and learnt javascript and Python.</p>
                <h3 data-aos="fade-up">Ilia state university</h3>
                <p data-aos="fade-up">Business Administration</p>
            </div>
        </div>
    )
}
export default Summary;