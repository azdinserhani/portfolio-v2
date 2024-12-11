import "./ProjectCard.scss";
import { motion } from "framer-motion";

import { VscLinkExternal } from "react-icons/vsc";
const ProjectCard = ({ item }) => {
  return (
    <div className={`projectCard ${item.isReverced ? "reverced" : ""}`}>
      <motion.div
        className="projectImg"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        className="projectInfo"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
      >
        <span>{item.num}</span>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <div className="btn">
          {item.gitUrl && (
            <button>
              {" "}
              <a href={item.gitUrl}>Git Repo</a>
            </button>
          )}{" "}
          {item.gitUrl === false && <p>Client Project</p>}
          {item.link && (
            <div className="link">
              <a href={item.link}>
                <VscLinkExternal fontSize={"25px"} />
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
