import React  from 'react';
import "../../../App.css";
import "./resume.css";
import "./education.css"

interface Education {
    name: string;
    place: any;
    description: string;
    uniPlace: string;
    uniEduName: string;
}

const education: Education[] = [
    {
        name: 'Front-end Web developer',
        place: 'Academy Of Digital Industry (2022/APR-2022/NOV)',
        description: 'In this academy we created several projects and learnt a lot, about programming, I learnt HTML and CSS again and improve my skills and learnt javascript and Python.',
        uniPlace: 'Ilia state university',
        uniEduName: 'Programming'
    }
]

const Summary: React.FC = () => {
    return (
        <div className="education column">
            <h2 >Education</h2>
            <div className='list-edu column'>
                {education.map((e) => (
                    <div key={e.name}>
                        <h3>{e.name}</h3>
                        <p>{e.place}</p>
                        <p>{e.description}</p>
                        <h3>{e.uniPlace}</h3>
                        <p>{e.uniEduName}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Summary;