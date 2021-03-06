import ProjectCard from "../ProjectCard/Project.Card.component";
import { useEffect, useState } from "react";

// Sceletons
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Projects = () => {
  const [fetching, setFetching] = useState();
  // Keep fetchet project data from DB
  const [data, setData] = useState([]);
  // Push data to this array after img buffer is converted to base64
  // and new object is created with all informations
  const projects = [];

  // Fetch projects from DB
  const fetchProjects = async () => {
    setFetching(true);
    await fetch("https://my-portfolio-contact.herokuapp.com/project")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => console.log(e))
      .finally(() => setFetching(false));
  };

  // Map through project data
  // Convert Buffer image to Base64
  // Create new object with all infomations and push to project array
  data.map((item) => {
    const img = new Buffer.from(item.projectImg).toString("base64");
    const data = {
      _id: item._id,
      img,
      description: item.description,
      url: item.url,
    };
    return projects.push(data);
  });

  // Fetch Project on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="projects-container" id="projects">
      <span className="text-like-html">{"<h2>"}</span>
      <h2>Projects</h2>
      <span className="text-like-html">{"</h2>"}</span>
      <div className="show-project-container">
        {fetching ? (
          <SkeletonTheme color="#757373" highlightColor="#00FFE9">
            <Skeleton count={1} height="200px" />
          </SkeletonTheme>
        ) : (
          projects.map((project) => (
            <ProjectCard
              img={project.img}
              description={project.description}
              url={project.url}
              key={project._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
