import React from 'react';
import { Link } from 'react-router-dom';  
import tickImage from '../Assets/tick1.webp';
const Experience = () => {
  return (
    <section id="experience">
    <p className="section__text__p1">Explore My</p>
    <h1 className="title">Experience</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container">
          <h2 className="experience-sub-title">Frontend Development</h2>
          <div className="article-container">
            <article>
              <img src={tickImage} alt="HTML experience" className="icon" />
              <div>
                <h3>HTML</h3>
                <a className='certificates' href='https://www.coursera.org/account/accomplishments/records/UW1J55UNT0LY'>
                <p>View certificate</p> 
                </a>
              </div>
            </article>
            <article>
              <img src={tickImage} alt="CSS experience" className="icon" />
              <div>
                <h3>CSS</h3>
                <a className='certificates' href='https://www.coursera.org/account/accomplishments/records/UW1J55UNT0LY'>
                <p>View certificate</p> 
                </a>
              </div>
            </article>
            <article>
              <img src={tickImage} alt="JavaScript experience" className="icon" />
              <div>
                <h3>JavaScript</h3>
                <a className='certificates' href='https://www.coursera.org/account/accomplishments/records/UW1J55UNT0LY'>
                <p>View certificate</p> 
                </a>
              </div>
            </article>
            <article>
              <img src={tickImage} alt="React JS experience" className="icon" />
              <div>
                <h3>React Js</h3>
                <a className='certificates' href='https://www.coursera.org/account/accomplishments/records/ISYFFIP0GC0M'>
                <p>View certificate</p> 
                </a>
              </div>
            </article>
          </div>
        </div>
        <div className="details-container">
          <h2 className="experience-sub-title">Back-end Development</h2>
          <div className="article-container">
            <article>
              <img src={tickImage} alt="Node.js experience" className="icon" />
              <div>
                <h3>Node.js</h3>
                <a className='certificates'>
                <p>View certificate</p> 
                </a>
              </div>
            </article>
            <article>
              <img src={tickImage} alt="Express.js experience" className="icon" />
              <div>
                <h3>Express.js</h3>
                <a className='certificates'>
                <p>View certificate</p> 
                </a>
              </div>
            </article>
            <article>
              <img src={tickImage} alt="SQL experience" className="icon" />
              <div>
                <h3>SQL</h3>
                <a className='certificates' href='https://www.coursera.org/account/accomplishments/records/ZSO05RO5RFPI'>
                <p>View certificate</p> 
                </a>
              </div>
            </article>
            <article>
              <img src={tickImage} alt="MongoDB experience" className="icon" />
              <div>
                <h3>MongoDB</h3>
                <a className='certificates'>
                <p>View certificate</p> 
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Experience;
