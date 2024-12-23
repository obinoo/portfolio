import React from 'react';
import './About.css';
import logo from '../../assets/images/image.jpg'

const About = () => {
  return (
    <section className="about section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={logo} alt="Nnubia Obinna Chukwudi" />
        </div>
        <div className="about-text">
          <p>
            Hello! I'm <strong>Nnubia Obinna Chukwudi</strong>, a passionate Backend Developer with over 2 years of experience in building scalable applications. My journey in software development has been exciting and filled with continuous learning.
          </p>
          <p>
            I specialize in Java (Spring Boot) and have recently expanded my expertise to include Node.js through the Decagon Bootcamp. My skills encompass developing RESTful APIs, managing databases, and deploying containerized applications with Docker.
          </p>
          <p>
            What sets me apart is my ability to collaborate effectively in cross-functional teams, delivering robust software solutions that meet and exceed expectations. I'm proficient in both Java and JavaScript ecosystems, allowing me to adapt to various project requirements seamlessly.
          </p>
          <p>
            I'm always eager to take on new challenges and contribute to innovative projects. Let's connect and explore how we can work together to create impactful solutions!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

