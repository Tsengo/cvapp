import React from 'react';
import "../../../App.css";
import "./skills.css"

const MySkills = () => {
    return (
        <div className='my_skills row'>
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