import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    "Java", "JavaScript (ES6+)", "TypeScript", "Node.js", "Spring Boot", "Express.js",
    "MongoDB", "MySQL", "PostgreSQL", "Docker", "Git", "GitHub", "Scrum"
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;

