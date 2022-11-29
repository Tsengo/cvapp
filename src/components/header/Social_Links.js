import React from 'react';
import "./Header.css";
import "../../App.css";
import Instagram from "../../images/instagram.png";
import Facebook from "../../images/facebook-social-logo.png";
import linkedin from "../../images/linkedin.png";
import Github from "../../images/github-logo.png";

const SocialLink = () => {
    return (
        <div className="social row">
            <ul>
                <li>
                    <a href="https://www.facebook.com" className="facebook" target="blank_">
                        <img src={Facebook } alt="facebook"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" className="instagram" target="blank_">
                        <img src={Instagram } alt="instagram"/>
                    </a>
                </li>
                <li>
                    <a href="www.linkedin.com/in/nika-tsenguashvili-6a090b238" className="linkedin" target="blank_">
                        <img src={linkedin } alt="linkedin"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Tsengo" className="github" target="blank_">
                        <img src={Github } alt="github"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default SocialLink;