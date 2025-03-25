
import React from 'react';
import project1 from '../Assets/project-1.png';

// slidding
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


const SocialMediaLink = (props) => (
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    <img src={props.src} className="project-img" alt={props.alt} />
  </a>
);


const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
  };


  const projects = [
    {
      title: "Fuel Delivery",
      description:"Built a fuel delivery web app with React.js and Node.js, enabling fuel orders, station registrations, and delivery tracking.",
      img: project1,
      link: "https://github.com/your-repo-link-1",
    },
    {
      title: "Portfolio",
      description:"",
      img: "",
      link: "https://github.com/your-repo-link-2",
    },
    {
      title: "Portfolio",
      description:"",
      img: "",
      link: "https://github.com/your-repo-link-2",
    },
  ];
  return (
  <section id="projects">
  <p className="section__text__p1">Browse My Recent</p>
  <h1 className="title">Projects</h1>
  <div className="slider-container">
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index} className="details-container color-container">
          <div className="article-container">
          <SocialMediaLink href="" src={project.img} alt={project.title} className="project-img" />
          </div>
          <h2 className="project-title">{project.title}</h2>
          <h3 className='project-description'>{project.description}</h3>
          <div className="btn-container">
            <a href="" className="btn btn-color-2 project-btn" target="_blank"  > GitHub </a>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>
  );
}
export default Projects
