import React from 'react';
import "../../../App.css";
import "./skills.css"

const MySkills = () => {
    return (
        <div className='my_skills row'>
            <ul className='column'>
                <li><span className='HTML'></span>HTML</li>
                <li><span className='CSS'></span>CSS</li>
                <li><span className='SCSS'></span>SCSS</li>
                <li><span className='Boot'></span>Bootstrap</li>
                <li><span className='JAVASCRIPT'></span>JAVASCRIPT</li>
                <li><span className='REACT'></span>REACT</li>
            </ul>
            <ul className='column'>
                <li><span className='nw'></span>NW.js</li>
                <li><span className='Electron'></span>Electron</li>
                <li><span className='PYTHON'></span>PYTHON (Basic)</li>
                <li><span className='Node'></span>Node js (Basic)</li>
                <li><span className='mysql'></span>MYSQL (Basic)</li>
                <li><span className='sql'></span>SQL Server (Basic)</li>
            </ul>
        </div>
    )
}
export default MySkills;
