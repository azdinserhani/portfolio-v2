import "./ProjectCard.scss";
import { motion } from "framer-motion";
import { VscLinkExternal } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ item }) => {
  return (
    <motion.div
      className={`projectCard ${item.isReverced ? "reverced" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      viewport={{ once: true }}
    >
      <motion.div
        className="projectImg"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.7, delay: 0.2 },
        }}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.3 },
        }}
      >
        <div className="img-container">
          <img src={item.img} alt={item.title} />
        </div>
      </motion.div>

      <motion.div
        className="projectInfo"
        initial={{ opacity: 0, x: item.isReverced ? -30 : 30 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.7, delay: 0.3 },
        }}
      >
        <span className="project-number">{item.num}</span>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        {item.info && <p style={{ color: "#ff7043" }}>{item.info}</p>}
        <div className="project-actions">
          {item.gitUrl && (
            <motion.a
              href={item.gitUrl}
              className="project-btn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={22} /> GitHub Repo
            </motion.a>
          )}

          {item.gitUrl === false && (
            <div className="client-project">Client Project</div>
          )}

          {item.link && (
            <motion.a
              href={item.link}
              className="live-link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <VscLinkExternal size={22} /> Live Demo
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
