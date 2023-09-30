import React from 'react';
import "../../../App.css";
import "./resume.css";
import "./professions.css";

const professionData = [
  {
    companyName: 'LTD World Sport',
    date: '2017-2022',
    position: 'Sales manager',
    description: 'Contact new companies and suggest products.',
  },
  {
    companyName: 'Hostel Tbilisi',
    date: '2018-2019',
    position: 'Administrator',
  },
  {
    companyName: 'LTD GeoOlimp',
    date: '2019-2020',
    position: 'Branch manager',
    description: 'Open and close branch and choose products which need for customers.',
  },
];

const Profession: React.FC = () => {
    return (
        <div className="profession column">
            <h2>Professional Experiences</h2>
            <div className='list-edu column'>
                {professionData.map((profession, index) => (
                    <div key={index}>
                        <h3>{profession.companyName} ({profession.date})</h3>
                        <p>{profession.position}</p>
                        {profession.description && <p>{profession.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Profession;
