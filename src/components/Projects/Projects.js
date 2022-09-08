import React from "react";
import { projects } from "../../assets/data/projects";
import linkk from "../../assets/imgs/link.svg";
import git from "../../assets/imgs/github.png";

const Projects = () => {
  return (
    <section className="projects wrapper">
      <div className="header">
        <span>
          <h2 className="s-title">Projects</h2>
        </span>
        {/* <div className="buttons">
          <button>button1</button>
          <button>button2</button>
          <button>button3</button>
          <button>button4</button>
          <button>button5</button>
        </div> */}
      </div>
      <ul className="projects__cards container col-sm-1 col-md-2 col-lg-3">
        {projects.map((project, index) => {
          return (
            <li key={index}>
              <Project {...project} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const Project = ({ img, title, text, link }) => {
  return (
    <article className="project flex flex-col">
      <div className="image__box">
        <img src={img.src} alt={img.alt} />
      </div>
      <div className="description">
        <h3 className="c-title">{title}</h3>
        <p>{text}</p>
        <div className="hr"></div>
        <ul>
          <li>
            <a href={link.git}>
              <img src={git} alt={"git link"} />
            </a>
          </li>
          <li>
            <a href={link.web}>
              <img src={linkk} alt={"website link"} />
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Projects;
