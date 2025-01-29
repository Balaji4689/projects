import React from 'react';

import likeImage from '../Assets/lik.png';
import gitImage from  '../Assets/git.png';
import email from '../Assets/Email.webp'

const SocialMediaLink = (props) => (
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    <img src={props.src} className="socialmediaimg" alt={props.alt} />
  </a>
);

const Contact = () => {
  return (
    <div>
        <section id="contact">
              <p className="section__text__p1">Get in Touch</p>
              <h1 className="title">Contact Me</h1>
              <div className="social-container">
                <div id="socials-container-2">
                <SocialMediaLink href="https://www.linkedin.com/in/m-balaji-reddy/" src={likeImage} alt="linkedin" />
                <SocialMediaLink href="https://github.com/dashboard" src={gitImage} alt="Github" />
                <SocialMediaLink href="mailto:baljireddymaddula123@gmail.com" src={email} alt="Github" />
              </div>
           </div>
          </section>
    </div>
  );
}

export default Contact;
