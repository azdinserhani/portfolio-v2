import ProjectCard from "../../components/projectCard/ProjectCard";
import { projectData } from "../../mockData";
import "./Project.scss";

const Project = () => {
  return (
    <div className="project">
      <h2>
        My <span>Projects</span>
          </h2>
          <div className="projectContainer">
              { projectData.map((item, index) => {
                  return <ProjectCard item={item}/>
              })}
          </div>
    </div>
  );
};

export default Project;
