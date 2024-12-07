import "./Skills.scss";
import {  skillsNew } from "../../mockData";
const Skills = () => {
  return (
    <div className="skills">
      <h2 className="sectionTittle">My Skills</h2>
      <div className="skillsItems">
        {skillsNew.map((item, index) => {
          return (
            <div className="skItem" key={ index }>
            

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
