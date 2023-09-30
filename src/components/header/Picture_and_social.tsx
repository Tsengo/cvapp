import React from "react";
import './Header.css';
import SocialLink from "./Social_Links";
import MyName from "./MyName";

const Picture_and_social = () => {
    return (
        <div className="pic-social column">
            <MyName name="Nika Tsenguashvili"/>
            <SocialLink name="" img="" url=""/>
            
        </div>
    )
}

export default Picture_and_social;