import ProjectCard from "../../components/projectCard/ProjectCard";
import { projectData } from "../../mockData";
import "./Project.scss";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="project" id="Projects">
      <div className="project-background">
        <div className="bg-circle circle1"></div>
        <div className="bg-circle circle2"></div>
      </div>
      
      <motion.div 
        className="project-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
      >
        <motion.h2
          className="sectionTittle"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          My <span>Projects</span>
        </motion.h2>
        
        <motion.p 
          className="project-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.8, delay: 0.2 } }}
        >
          Featured work I've built and designed
        </motion.p>
        
        <div className="projectContainer">
          {projectData.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
