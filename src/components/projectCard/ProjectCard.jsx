import "./ProjectCard.scss";

import { VscLinkExternal } from "react-icons/vsc";
const ProjectCard = ({ item }) => {
  return (
    <div className={`projectCard ${item.isReverced ? "reverced" : ""}`}>
      <div className="projectImg">
        <img src={item.img} alt="" />
      </div>
      <div className="projectInfo">
        <span>{item.num}</span>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <div className="btn">
          { item.gitUrl && <button> <a href={ item.gitUrl }>Git Repo</a></button> }{ " " }
          {item.gitUrl === false && <p>Client Project</p>}
          { item.link && <div className="link">
            <a href={ item.link }>
              
            <VscLinkExternal fontSize={"25px"}/>
            </a>
          </div>}
         
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
