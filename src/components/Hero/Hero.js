import React from "react";
import { swap } from "../../assets/data/swap";
import developer from "../../assets/imgs/developer.svg";
import resume from "../../assets/Resume.pdf"

const Hero = () => {
  return (
    <section className="hero container col-sm-1 col-md-2 col-lg-2">
      <div className="note flex flex-col flex-col-y-center">
        {swap.map((word, index) => {
          return (
            <Swap
              key={index}
              word={word}
              reverse={index % 2 === 0 ? true : false}
            />
          );
        })}
      </div>
      <div className="image__wrapper flex flex-col flex-col-y-center flex-col-x-center">
        <img src={developer} alt="demo" />
        <div className="buttons">
          <a
            download={"ayetigbo_samuel_resume.pdf"}
            href={resume}
          >
            <button className="btn-primary">download resume</button>
          </a>
          <a href="mailto:ayetigbosamuel01@gmail.com">
            <button className="btn-secondary">hire me</button>
          </a>
        </div>
      </div>
    </section>
  );
};

const Swap = ({ word, reverse }) => {
  return (
    <div className="swap flex flex-row flex-row-y-center">
      {reverse ? (
        <>
          <h3 className="old">{word.old}</h3>
          <h3 className="new">{word.new}</h3>
        </>
      ) : (
        <>
          <h3 className="new">{word.new}</h3>
          <h3 className="old">{word.old}</h3>
        </>
      )}
    </div>
  );
};

export default Hero;
