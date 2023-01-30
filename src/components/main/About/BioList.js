import React from "react";
import "../../../App.css";

import "./about.css";

const BioList = () => {

    return (
        <div className="small-res row">
            <ul className="column">
                <li>Birthday: 11 Nov 1998</li>
                <li>Phone: +995 555 568 831</li>
                <li>City: Tbilisi/GEO</li>
            </ul>
            <ul className="column">
                <li>Age: 24</li>
                <li>Email: niktsenguashvili@gmail.com</li>
                <li>Degree: Bachelor</li>
            </ul>
        </div>
    )
};
export default BioList;