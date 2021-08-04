
import ProjectCard from "../ProjectCard/Project.Card.component";
import { FaArrowsAltV } from "react-icons/fa";
import food from "../../assets/img/projects-imgs/food.jpg";
import weather from "../../assets/img/projects-imgs/weather.jpg";
import monsters from "../../assets/img/projects-imgs/monster.jpg";
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
  ];

  return (
    
    <div className="projects-container" id="projects">
      <span className="text-like-html">{"<h2>"}</span>
      <h2>My Recent Work</h2>
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
