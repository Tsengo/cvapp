import React from 'react';
import "../../../App.css";
import "./resume.css";
import "./professions.css"

const Profession = () => {
    return (
        <div className="profession column">
            <h2 >Professional Experiences</h2>
            <div className='list-edu column'>
                <h3 >LTD World Sport (2017-2022)</h3>
                <p >Sales manager</p>
                <p >Contact new companies and suggest products.</p>
                <h3 >Hostel Tbilisi (2018-2019)</h3>
                <p >Administrator</p>
                <h3 >LTD GeoOlimp (2019-2020)</h3>
                <p >Branch manager</p>
                <p >Open and close branch and choose products which need for customers.</p>
            </div>
        </div>
    )
}
export default Profession;