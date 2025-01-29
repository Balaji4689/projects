import React from 'react';
import { Link } from 'react-router-dom';  
import logo from '../Assets/profile.png';
import likeImage from '../Assets/lik.png';
import gitImage from  '../Assets/git.png';
import email from '../Assets/Email.webp'

const SocialMediaLink = (props) => (
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    <img src={props.src} className="social-media-img" alt={props.alt} />
  </a>
);


const Navbar = () => {
  return (
    <div>
    <nav id="desktop-nav">
      <div className="logo">M Balaji</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img src={logo} alt="balaji profile picture"/>
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">M Balaji Reddy</h1>
          <p className="section__text__p2">Full Stack Developer</p>
          <div className="btn-container">
            <a href="resume.pdf" download="resume.pdf">
            <button className="btn btn-color-1">Download cv</button>
            </a>
          </div>
          <div id="socials-container-1">
          <SocialMediaLink href="https://www.linkedin.com/in/m-balaji-reddy/" src={likeImage} alt="linkedin" />
          <SocialMediaLink href="https://github.com/dashboard" src={gitImage} alt="Github" />
          <SocialMediaLink href="mailto:baljireddymaddula123@gmail.com" src={email} alt="Github" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;

