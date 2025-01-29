import React from 'react';
import { Link } from 'react-router-dom';  
import ExperienceImage from '../Assets/Experience.png';
import eductionImage from '../Assets/eduction.jpg';
import certificateImage from '../Assets/certificate.png';
const About = () => {
  return (
<section id="about">
    <p className="section__text__p1">Get To Know More</p>
    <h1 className="title">About Me</h1>
    <div className="section-container">
      <div className="about-details-container">
        <div className="about-containers">
          <div className="details-container">
            <img src={ExperienceImage} alt="Experience icon" className="icon"/>
            <h3>Experience</h3>
            <p>1+ years <br />Full Stack Developer</p>
          </div>
          <div className="details-container">
            <img src={eductionImage} alt="Education icon" className="icon" />
            <h3>Education</h3>
            <p>B Tech 3rd Year <br />Computer Science And Business System</p>
          </div>
          {/* <div className="details-container">
            <img src={certificateImage} alt="Certificates icon" className="icon" />
            <h3>Certificates</h3>
          </div> */}
        </div>
        <div className="text-container">
          <p>
            Hi! I’m M Balaji Reddy, a full-stack developer pursuing a Bachelor’s in Computer Science and Business Systems. 
            I specialize in React.js for front-end development and Node.js and express.js for backend. With a strong proficiency in MySQL and MongoDB, 
            I excel at building scalable, high-performance applications and delivering seamless user experiences.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}

export default About;
