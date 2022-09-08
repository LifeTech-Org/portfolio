import React, { useEffect } from "react";
import html from "../../assets/imgs/html.png";
import css from "../../assets/imgs/css.png";
import react from "../../assets/imgs/react.png";
import firebase from "../../assets/imgs/firebase.png";
import flutter from "../../assets/imgs/flutter.png";
import git from "../../assets/imgs/git.png";

const Technologies = () => {
  useEffect(() => {
    const resize = () => {
      const allCards = document.getElementsByClassName("technology");
      for (var i = 0; i < allCards.length; i++) {
        document.getElementsByClassName("technology")[i].style.minHeight =
          document.getElementsByClassName("technology")[i].clientWidth + "px";
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <section className="technologies wrapper container  col-sm-1 col-md-2 col-lg-2 ">
      <article className="note flex flex-col flex-col-y-center">
        <div className="c-title">technologies</div>
        <h2 className="s-title">technologies i can work with</h2>
        <p>
          With advance knowledge and expertise in the following web
          technologies, you are certain to get the best service from me.
        </p>
        {/* <ul>
          <li>
            <a href="/demo">
              <img src={YT} alt="demo" />
            </a>
          </li>
          <li>
            <a href="/demo">
              <img src={YT} alt="demo" />
            </a>
          </li>
          <li>
            <a href="/demo">
              <img src={YT} alt="demo" />
            </a>
          </li>
          <li>
            <a href="/demo">
              <img src={YT} alt="demo" />
            </a>
          </li>
        </ul> */}
        <a href="mailto:ayetigbosamuel01@gmail.com">
          <button className="btn-primary">hire me</button>
        </a>
      </article>
      <ul className="images container col-sm-2  col-md-2 col-lg-3 ">
        {[
          { src: html, alt: "html 5" },
          { src: css, alt: "css 3" },
          { src: react, alt: "react js" },
          { src: firebase, alt: "firebase" },
          { src: flutter, alt: "flutter" },
          { src: git, alt: "git" },
        ].map((img, index) => {
          return (
            <li key={index}>
              <Technology img={{ src: img.src, alt: img.alt }} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const Technology = ({ img }) => {
  return (
    <div className="technology flex flex-row  flex-row-y-center flex-row-x-center">
      <img src={img.src} alt={img.alt} />
    </div>
  );
};

export default Technologies;
