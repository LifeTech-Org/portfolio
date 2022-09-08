import React from "react";
import frontend from "../../assets/imgs/frontend.png";
import backend from "../../assets/imgs/backend.png";
import debugging from "../../assets/imgs/debugging.png";
import server from "../../assets/imgs/server.png";
import database from "../../assets/imgs/database.png";
import hosting from "../../assets/imgs/hosting.png";

const Fetaures = () => {
  return (
    <section className="features wrapper container col-sm- 1 col-md-2 col-lg-2">
      <ul className="container col-sm-2 col-md-2 col-lg-3">
        <li>
          <Feature
            img={{ src: frontend, alt: "frontend developement" }}
            title={"front end development"}
            text={"Exotic web design that reflects exactly what you wants. "}
          />
        </li>
        <li>
          <Feature
            img={{ src: backend, alt: "backend development" }}
            title={"back end development"}
            text={
              "Functional web development that performs well without lagging and error."
            }
          />
        </li>
        <li>
          <Feature
            img={{ src: debugging, alt: "debugging" }}
            title={"code debugging"}
            text={
              "Fixing bugs in past projects and help getting them back to speed."
            }
          />
        </li>
        <li>
          <Feature
            img={{ src: server, alt: "server side" }}
            title={"server side programming"}
            text={
              "Coonecting to your website to an online server and doing what need to be done."
            }
          />
        </li>
        <li>
          <Feature
            img={{ src: database, alt: "database" }}
            title={"database"}
            text={
              "Persisting your data by storing them in a fast and trusted database."
            }
          />
        </li>
        <li>
          <Feature
            img={{ src: hosting, alt: "hosting and seo" }}
            title={"hosting and SEO optimization"}
            text={
              "Getting your website to be available on the internet to every one connected to the internet."
            }
          />
        </li>
      </ul>
      <article className="note flex flex-col flex-col-y-center">
        <div className="c-title">services</div>
        <h2 className="s-title">what do you need?</h2>
        <p>
          My sole goal has always been to satisfy my clients by going beyond
          their expectations. And for all these services, they'll surely get it,{" "}
          <strong>SATISFACTION.</strong>
        </p>
        <a href="mailto:ayetigbosamuel01@gmail.com">
          <button className="btn-primary">hire me</button>
        </a>
      </article>
    </section>
  );
};

const Feature = ({ img, title, text }) => {
  return (
    <article className="feature flex flex-col flex-col-x-center">
      <img src={img.src} alt={img.alt} />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
};

export default Fetaures;
