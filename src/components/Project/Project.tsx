import React from 'react';
import './Project.css';

const Projects = () => {
  const projects = [
    {
      name: "Online Store (Node.js)",
      description: "Created a backend API using Node.js and Express.js for an online store with product and order management features. Utilized MongoDB for data storage and Docker for containerization, ensuring easy deployment across multiple environments.",
      // link: "https://traidr-frontend.vercel.app/" // Replace with the actual link to your project
    },
    {
      name: "E-commerce Platform (Java)",
      description: "Built and maintained backend services using Spring Boot, handling high traffic and ensuring system stability. Deployed the application using Docker to create scalable and portable environments. Developed secure authentication and authorization mechanisms for user accounts."
    },
    {
      name: "Financial Tracking App (Java)",
      description: "Developed a financial tracking app backend using Spring boot, integrating user authentication and expense tracking features. Utilized PostgreSQL for data storage and Docker to streamline the development and deployment processes."
    },
    {
      name: "File Uploader (Java)",
      description: "Developed a file uploading module with secure file storage using Spring Boot. Implemented file retrieval and access features to manage uploaded content efficiently."
    },
    {
      name: "Web Crawler (Java)",
      description: "Created a web crawler application to extract data from websites using Spring Boot. Implemented scheduling for efficient crawling tasks, handling large-scale data scraping."
    },
    {
      name: "Card Services Integration (Java)",
      description: "Integrated card services into an existing system using MapleRad. Developed functionalities related to card transactions and payment processing."
    }
  ];

  return (
    <section className="projects section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

