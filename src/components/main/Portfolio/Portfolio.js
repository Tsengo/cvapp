import React, { useEffect } from 'react';
import LeftSideWebs from './TopWebs';
import RightSideWebsite from "./BottomWebs"
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import "./portfolio.css"


const Portfolio = () => {
    useEffect(() => {
        Aos.init({duration:3000})
    })
    return (
        <div className="Portfolio column" id='PortfolioScroll'>
            <h1 data-aos="fade-right">Portfolio</h1>
            <LeftSideWebs />
            <RightSideWebsite />
        </div>
    )
}

export default Portfolio;