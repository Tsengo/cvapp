import React from 'react';
import "../../../App.css";
import "./resume.css";
import "./summary.css";

const Summary: React.FC = () => {
    return (
        <div className="summary column">
            <h2>Summary</h2>
            <div>
                <ul className='un-sum column'>
                    <h3>Nika Tsenguashvili</h3>
                    <ul className="small-re">
                        <li>Tbilisi/Georgia</li>
                        <li>+995 555 568 831</li>
                        <li>niktsenguashvili@gmail.com</li>
                    </ul>
                </ul>
            </div>
        </div>
    );
}

export default Summary;
