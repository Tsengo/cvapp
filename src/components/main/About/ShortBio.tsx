import React from "react";
import "../../../App.css";
import BioList from "./BioList";
import "./about.css";

interface MyBio {
    profession: string;
    bio: string;
}

const MyBiography: MyBio[] = [
    {
        profession: 'Front-end Web Developer',
        bio: 'I am from Georgia, when i finished school started to learn programming and first language was HTML and CSS, it was about 5 years ago, but never worked in company to improve my skills, and now I think i know much to start work with small or basic projects.'
    }
]

const Bio = () => { 
    return (
        <>
            {MyBiography.map((data) => (
                
                        <div className="short-bio column">
                    <h2 >
                        {data.profession}
                    </h2>
                    <p >
                        {data.bio}
                    </p>
                    <BioList />
                </div>
            ))}
        </>
    )
};

export default Bio;