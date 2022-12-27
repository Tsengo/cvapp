
import React from 'react';
import "../main/BackImg.css";
import Mainer from "./Main.js";
import MainContent from './maincontent/MainContent';

const BackImg = () => { 
    return (
        <div className='background-pic column'>
            <Mainer name="Nika Tsenguashvili" />
            <MainContent />
        </div>
    )
}

export default BackImg;