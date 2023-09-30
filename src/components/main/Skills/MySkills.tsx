import React from 'react';
import "../../../App.css";
import "./skills.css"

interface Skill {
  name: string;
  className: string;
}

const skillsData: Skill[] = [
  { name: 'HTML', className: 'HTML' },
  { name: 'CSS', className: 'CSS' },
  { name: 'SCSS', className: 'SCSS' },
  { name: 'Bootstrap', className: 'Boot' },
  { name: 'JavaScript', className: 'JAVASCRIPT' },
  { name: 'React', className: 'REACT' },
  { name: 'Electron', className: 'Electron' },
  { name: 'Python', className: 'PYTHON' },
  { name: 'Node.js', className: 'Node' },
  { name: 'MySQL', className: 'mysql' },
  { name: 'SQL Server', className: 'sql' },
  { name: 'PostgreSQL', className: 'nw' },
];

const MySkills: React.FC = () => {
  return (
    <div className='my_skills row'>
        <ul className='column'>
        {skillsData.slice(0, 6).map((skill) => (
          <li key={skill.className}><span className={skill.className}></span>{skill.name}</li>
        ))}
      </ul>
      <ul className='column'>
        {skillsData.slice(6).map((skill) => (
          <li key={skill.className}><span className={skill.className}></span>{skill.name}</li>
        ))}
        </ul>
    </div>
  );
};

export default MySkills;
