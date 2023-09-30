import React from 'react';
import "../main/BackImg.css";
import Mainer from "./Main";
import MainContent from './maincontent/MainContent';

interface BackImgProps {
    className?: string;
}

const BackImg: React.FC<BackImgProps> = ({className}) => {
    return (
        <div className={`background-pic column ${className}`}>
            <Mainer name="Nika Tsenguashvili" />
            <MainContent />
        </div>
    )
}

export default BackImg;
