import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import "./leftwebs.css";
import Boldo from "../../../images/boldo.PNG";
import ChatApp from "../../../images/chat-app.PNG";
import Colloseum from "../../../images/colloseum.PNG";


const LeftSideWebs = () => {
    useEffect(() => {
        Aos.init({duration:3000})
    })
    return (
        <div className="webs row">
            <a data-aos="fade-right" href="https://boldo.pages.dev/" target="blank_">
                <img src={Boldo} alt="/"/>
            </a>
            <a data-aos="fade-top" href="https://chat-web-czt.pages.dev/" target="blank_">
                <img src={ChatApp} alt="/"/>
            </a>
            <a data-aos="fade-left" href="http://colloseumgymtbilisi.ge/" target="blank_">
                <img src={Colloseum} alt="/"/>
            </a>
        </div>
    )
}

export default LeftSideWebs;