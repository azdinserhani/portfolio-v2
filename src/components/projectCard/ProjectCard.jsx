import "./ProjectCard.scss";

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
      </div>
    </div>
  );
};

export default ProjectCard;
