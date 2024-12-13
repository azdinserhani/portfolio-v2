import "./Skills.scss";
import { skillsNew } from "../../mockData";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <div className="skills" id="Skills">
      <motion.h2
        className="sectionTittle"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        My Skills
      </motion.h2>
      <div className="skillsItems">
        {skillsNew.map((item, index) => {
          return (
            <motion.div
              className="skItem"
              key={index}
              initial={{ opacity: 0, y: 200 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: "linear",
                  delay: 0.1 * index,
                },
              }}
            >
              {item.img}

              <span>{item.name}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
