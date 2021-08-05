import Navbar from "../Navbar/navbar.component";
import About from "../About/About.component";
import Projects from "../Projects/Projects.component";
import ContactMe from "../ContactMe/ContactMe.component";

import { FaArrowsAltV } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import myPersonalImg from "../../assets/img/NikolaCropPNG.png";

import { Link } from "react-scroll";

const HomePage = () => {
  return (
    <div className="page-container" id="home">
      <Navbar />
      <div className="wrapper">
        <div className="text-wrap" data-aos="fade-down-left">
          <span className="text-like-html">{"<h1>"}</span>
          <h1>
            <span className="hover-first">H</span>
            <span className="hover-color">i</span>,
          </h1>
          <h1>
            <span className="hover-first">I</span>
            <span className="hover-color">'m</span>{" "}
            <span className="hover-first">N</span>
            <span className="hover-color">i</span>
            <span className="hover-color">k</span>
            <span className="hover-color">o</span>
            <span className="hover-color">l</span>
            <span className="hover-color">a</span>{" "}
            <span className="hover-first">R</span>
            <span className="hover-color">i</span>
            <span className="hover-color">s</span>
            <span className="hover-color">t</span>
            <span className="hover-color">o</span>
            <span className="hover-color">s</span>
            <span className="hover-color">k</span>
            <span className="hover-color">i</span>{" "}
            <span className="hover-first">E</span>
            <span className="hover-color">n</span>
            <span className="hover-color">t</span>
            <span className="hover-color">r</span>
            <span className="hover-color">y</span>{" "}
            <span className="hover-first">L</span>
            <span className="hover-color">e</span>
            <span className="hover-color">v</span>
            <span className="hover-color">e</span>
            <span className="hover-color">l</span>{" "}
            <span className="hover-first">F</span>
            <span className="hover-color">u</span>
            <span className="hover-color">l</span>
            <span className="hover-color">l</span>{" "}
            <span className="hover-first">S</span>
            <span className="hover-color">t</span>
            <span className="hover-color">a</span>
            <span className="hover-color">c</span>
            <span className="hover-color">k</span>{" "}
            <span className="hover-first">W</span>
            <span className="hover-color">e</span>
            <span className="hover-color">b</span>{" "}
            <span className="hover-first">D</span>
            <span className="hover-color">e</span>
            <span className="hover-color">v</span>
            <span className="hover-color">e</span>
            <span className="hover-color">l</span>
            <span className="hover-color">o</span>
            <span className="hover-color">p</span>
            <span className="hover-color">e</span>
            <span className="hover-color">r</span>
          </h1>
          <span className="text-like-html-title-right">{"</h1>"}</span>
        </div>
        {/* <div className="personal-img-wrap" data-aos="fade-down-right">
          <span className="text-like-html">{"<img"}</span>
          <div>
            <img src={myPersonalImg} alt="img" />
          </div>
          <span className="text-like-html">{"/>"}</span>
        </div> */}
      </div>
      <div className="if-tag">
        <span className="text-like-html">{"if (questions) {"}</span>
        <div className="contact-me-button slideInLeft">
          <span className="text-like-html">{"<button>"}</span>
          <Link to="contact" spy={true} smooth={true} className="btn-contact-me">
            Get In Touch
          </Link>{" "}
          <span className="text-like-html">{"</button>"}</span>
        </div>
        <span className="text-like-html">{"}"}</span>
      </div>
      <div className="scroll">
        <span className="text-like-html span-d-block">{"<p>"}</span>
        <p className="scrool-down bounceIn">
          scroll <FaArrowsAltV />
        </p>
        <span className="text-like-html span-d-block">{"</p>"}</span>
      </div>
      <About />
      <Projects />
      <ContactMe />
      <p className="text-like-html-body">{"</body>"}</p>
      <p className="text-like-html-html">{"</html>"}</p>
    </div>
  );
};

export default HomePage;
