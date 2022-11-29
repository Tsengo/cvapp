import React from 'react';
import "./BackImg.css";
import Typed from "react-typed";

const Mainer = (props) => { 
    return (
        <div className='texts'>
            <p className='name-text'>{props.name}</p>
            <Typed className='animation-text' 
                strings={["Junior Front-end developer"]}
                typeSpeed={100}
                backSpeed={10}
            />
        </div>
    )
}
export default Mainer;