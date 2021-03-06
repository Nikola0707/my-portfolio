import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ProjectCard = ({ img, description, url }) => {
  useEffect(() => {
    // Animaition
    Aos.init({
      disable: "mobile",
      duration: 2000,
    });
  }, []);
  return (
    <div className="project-card hvrbox" data-aos="flip-left">
      {/* <img src={img} alt="project-img" /> */}
      <img src={`data:image/png;base64, ${img}`} alt="Red dot" />
      <div className="hvrbox-layer_top">
        <div className="hvrbox-text">
          <p className="project-description">{description}</p>
          <a href={url} className="project-card-btn">
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
