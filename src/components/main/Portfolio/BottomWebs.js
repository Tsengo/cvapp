import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import "./rightwebs.css"
import FindTrend from "../../../images/findtrend.PNG";
import Product from "../../../images/product.PNG";
import SinglePage from "../../../images/single-page.PNG";


const RightSideWebs = () => {
    useEffect(() => {
        Aos.init({duration:3000})
    })
    return (
        <div className="webs row">
            <a data-aos="fade-right" href="https://findtrend.pages.dev/" target="blank_">
                <img src={FindTrend} alt="/"/>
            </a>
            <a data-aos="fade-top" href="https://product-preview-card-eu4.pages.dev/" target="blank_">
                <img src={Product} alt="/"/>
            </a>
            <a data-aos="fade-left" href="https://single-page-web.pages.dev/" target="blank_">
                <img src={SinglePage} alt="/"/>
            </a>
        </div>
    )
}

export default RightSideWebs;