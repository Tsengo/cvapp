import React from 'react';
import "../../../App.css";
import MySkills from "./MySkills";
import "./skills.css"

const Skills = () => {

    // const [skills, unBlur] = useState(false);
    // const change_background_color = () => {
    //     // console.log(window.scrollY);
    //     if (window.scrollY >= 800) {
    //         unBlur(true);
    //     } else {
    //         unBlur(false);
    //     }
    // }
    // window.addEventListener("scroll", change_background_color);
    return (
        <div className='skills' id="SkillScroll">
            <h1 >Skills</h1>
            <MySkills />
        </div>
    )
}
export default Skills;