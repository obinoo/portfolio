import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer (Node.js)",
      company: "Decagon Bootcamp",
      period: "May 2024 – Sep 2024",
      responsibilities: [
        "Developed RESTful APIs using Node.js and Express.js.",
        "Integrated MongoDB and PostgreSQL for database management, ensuring data consistency and security.",
        "Containerized backend services with Docker for streamlined deployment and environment consistency.",
        "Implemented user authentication with JWT and OAuth for secure access control."
      ]
    },
    {
      title: "Java Spring Boot Developer",
      company: "MINTYN, Lagos",
      period: "April 2022 – Sep 2022",
      responsibilities: [
        "Designed and implemented backend services using Spring Boot, improving system scalability and performance.",
        "Collaborated with cross-functional teams to analyze requirements and deliver high-quality software solutions on time.",
        "Developed RESTful APIs for microservice communication, optimizing system efficiency.",
        "Integrated SQL databases and worked with Hibernate for data persistence."
      ]
    },
    {
      title: "Junior Java Developer",
      company: "MINTYN, Lagos",
      period: "April 2023 – Aug 2023",
      responsibilities: [
        "Contributed to backend development of customer-facing applications using Java and Spring Boot.",
        "Participated in code reviews, ensuring adherence to best coding practices.",
        "Assisted in troubleshooting production issues, minimizing downtime and improving system reliability."
      ]
    }
  ];

  return (
    <section className="experience">
      <h2>Professional Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title}</h3>
          <p className="company-period">{exp.company} | {exp.period}</p>
          <ul>
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;

