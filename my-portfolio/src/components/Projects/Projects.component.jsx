
import ProjectCard from "../ProjectCard/Project.Card.component";
import { FaArrowsAltV } from "react-icons/fa";
import food from "../../assets/img/projects-imgs/food.jpg";
import weather from "../../assets/img/projects-imgs/weather.jpg";
import monsters from "../../assets/img/projects-imgs/monster.jpg";
import foodMenu from "../../assets/img/projects-imgs/food-manu.png";
import reviewCard from "../../assets/img/projects-imgs/review-card.png";
import travelTour from "../../assets/img/projects-imgs/travel-tour.png";
import accordion from "../../assets/img/projects-imgs/accordion.png";

const Projects = () => {
  const projects = [
    {
      img: food,
      description: "Recipe Full Stack MERN Application",
      url: "https://addyourrecipe.netlify.app/",
    },
    {
      img: weather,
      description: "Simple React Weather application",
      url: "https://weatherinfocheck.netlify.app/",
    },
    {
      img: monsters,
      description: "Simple React find monster application",
      url: "https://findmonster.netlify.app/",
    },
    {
      img: foodMenu,
      description: "Simple React foodMenu application",
      url: "https://food-menu-example.netlify.app/",
    },
    {
      img: reviewCard,
      description: "Simple React review card",
      url: "https://my-review-card.netlify.app",
    },
    {
      img: travelTour,
      description: "Simple React travel tour suggestion application",
      url: "https://travel-suggestions.netlify.app",
    },
    {
      img: accordion,
      description: "Simple React custom accordion",
      url: "https://custom-accordion.netlify.app",
    },
  ];

  return (
    
    <div className="projects-container" id="projects">
      <span className="text-like-html">{"<h2>"}</span>
      <h2>Projects</h2>
      <span className="text-like-html">{"</h2>"}</span>
      <div className="show-project-container">
        {projects.map((project, index) => (
          <ProjectCard
            img={project.img}
            description={project.description}
            url={project.url}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
