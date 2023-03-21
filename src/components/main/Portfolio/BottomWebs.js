import React from 'react';
import "../../../App.css";
import "./leftwebs.css"
import FindTrend from "../../../images/findtrend.PNG";
import Product from "../../../images/product.PNG";
import SinglePage from "../../../images/single-page.PNG";
import Boldo from "../../../images/boldo.PNG";
import ChatApp from "../../../images/chat-app.PNG";
import Colloseum from "../../../images/colloseum.PNG";
import Grill from "../../../images/grill.PNG";
import PigGame from "../../../images/Pig-game.PNG";
import Bank from "../../../images/bank.PNG";



const RightSideWebs = () => {

    return (
        <div className="webs row">
            <a href="https://findtrend.pages.dev/" target="blank_">
                <img src={FindTrend} alt="/"/>
            </a>
            <a href="https://product-preview-card-eu4.pages.dev/" target="blank_">
                <img src={Product} alt="/"/>
            </a>
            <a href="https://single-page-web.pages.dev/" target="blank_">
                <img src={SinglePage} alt="/"/>
            </a>
            <a href="https://boldo.pages.dev/" target="blank_">
                <img src={Boldo} alt="/"/>
            </a>
            <a href="https://chat-web-czt.pages.dev/" target="blank_">
                <img src={ChatApp} alt="/"/>
            </a>
            <a href="http://colloseumgymtbilisi.ge/" target="blank_">
                <img src={Colloseum} alt="/"/>
            </a>
            <a href="https://company-name.pages.dev/" target="blank_">
                <img src={Grill} alt="/"/>
            </a>
<a href="https://pig-game-9vs.pages.dev/" target="blank_">
                <img src={PigGame} alt="/"/>
            </a>
<a href="https://sparkly-longma-7606e7.netlify.app/" target="blank_">
                <img src={Bank} alt="/"/>
            </a>
        </div>
    )
}

export default RightSideWebs;
