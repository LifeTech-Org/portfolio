import React from "react";

const Footer = () => {
  return (
    <footer className="footer wrapper container col-sm-1 col-md-2 col-lg-2">
      <div className="copy">
        Copyright &copy; {new Date().getFullYear()}, LifeTech.
      </div>
      {/* <ul>
        <li>
          <a href="phone:+2348149120163">
            <img src={call} alt="demo" />
          </a>
        </li>
        <li>
          <a href="mailto:ayetigbosamuel01@gmail.com">
            <img src={mail} alt="demo" />
          </a>
        </li>
      </ul> */}
      <div className="hire">
        <a href="mailto:ayetigbosamuel01@gmail.com">
          <button className="">Mail Me</button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
