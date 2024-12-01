import "./Skills.scss";
import { skills } from "../../mockData";
const Skills = () => {
  return (
    <div className="skills">
      <h2>My Skills</h2>
      <div className="skillsItems">
        {skills.map((item, index) => {
          return (
            <div className="skItem" key={index}>
              {item.img}
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
