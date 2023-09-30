import React from 'react';
import "./BackImg.css";
import Typed from "react-typed";

interface MainerProps {
    name: string;
}

const Mainer:React.FC<MainerProps> = (props) => { 
    return (
        <div className='texts'>
            <p className='name-text'>{props.name}</p>
            <Typed className='animation-text' 
                strings={["Front-end developer"]}
                typeSpeed={100}
                backSpeed={10}
            />
        </div>
    )
}
export default Mainer;