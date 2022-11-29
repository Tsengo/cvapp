import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import "./resume.css";
import "./professions.css"

const Profession = () => {
    useEffect(() => {
        Aos.init({duration:1400})
    })
    return (
        <div className="profession column">
            <h2 data-aos="fade-up">Professional Experiences</h2>
            <div className='list-edu column'>
                <h3 data-aos="fade-up">LTD World Sport (2017-2022)</h3>
                <p data-aos="fade-up">Sales manager</p>
                <p data-aos="fade-up">Contact new companies and suggest products.</p>
                <h3 data-aos="fade-up">Hostel Tbilisi (2018-2019)</h3>
                <p data-aos="fade-up">Administrator</p>
                <h3 data-aos="fade-up">LTD GeoOlimp (2019-2020)</h3>
                <p data-aos="fade-up">Branch manager</p>
                <p data-aos="fade-up">Open and close branch and choose products which need for customers.</p>
            </div>
        </div>
    )
}
export default Profession;