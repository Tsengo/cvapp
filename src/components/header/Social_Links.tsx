import React from 'react';
import "./Header.css";
import "../../App.css";

type SocialLinkType = {
    url: string;
    img: string; 
    name: string;
}

const SocialLinkArray: SocialLinkType[] = [
    {
        url: 'https://www.facebook.com',
        img: require('../../images/facebook-social-logo.png'),
        name: 'facebook'
    },
    {
        url: "https://www.instagram.com/",
        img: require('../../images/instagram.png'),
        name: 'instagram'
    },
    {
        url: "https://www.linkedin.com/in/nika-tsenguashvili-6a090b238",
        img: require('../../images/linkedin.png'),
        name: "linkedin"
    },
    {
        url: "https://github.com/Tsengo",
        img: require('../../images/github-logo.png'),
        name: "github"
    }
]

const SocialLink:React.FC<SocialLinkType> = ({img, url, name}) => {
    return (
        <div className="social row">
            <ul>
                {SocialLinkArray.map((data, index) => (
                    <li key={index}>
                        <a href={data.url} className={data.name} target='_blank' rel='noopener noreferrer'>
                            <img src={data.img} alt={ data.name } />
                        </a>
                    </li>
                ))}      
            </ul>
        </div>
    )
}

export default SocialLink;
