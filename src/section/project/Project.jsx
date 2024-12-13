import ProjectCard from "../../components/projectCard/ProjectCard";
import { projectData } from "../../mockData";
import "./Project.scss";
import {motion} from "framer-motion"
const Project = () => {
  return (
    <div className="project" id="Projects">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        My <span>Projects</span>
      </motion.h2>
      <div className="projectContainer">
        {projectData.map((item, index) => {
          return <ProjectCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default Project;
