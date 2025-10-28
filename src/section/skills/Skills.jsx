import "./Skills.scss";
import { skillsNew } from "../../mockData";
import { motion } from "framer-motion";

const Skills = () => {
  // Group skills by category
  const categories = {
    Frontend: [
      "ReactJs",
      "Nextjs",
      "Html",
      "Css",
      "Javascript",
      "Sass",
      "Bootstrap",
      "Tailwind CSS",
    ],
    Backend: ["Nodejs", "Express js", "Socket Io", "Nestjs"],
    Database: ["MongoDb", "Postgresql", "Supabase"],
    Tools: ["Github", "N8N", "Notion", "Figma"],
  };

  return (
    <div className="skills" id="Skills">
      <div className="skills-background">
        <div className="bg-circle circle1"></div>
        <div className="bg-circle circle2"></div>
      </div>

      <motion.div
        className="skills-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
      >
        <motion.h2
          className="sectionTittle"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          My <span>Skills</span>
        </motion.h2>

        <motion.p
          className="skills-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.8, delay: 0.2 },
          }}
        >
          Technologies I've been working with
        </motion.p>

        <div className="skills-container">
          {Object.entries(categories).map(([category, skills], catIndex) => (
            <motion.div
              className="skills-category"
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.15 * catIndex },
              }}
            >
              <h3 className="category-title">{category}</h3>
              <div className="skillsItems">
                {skillsNew
                  .filter((item) => skills.includes(item.name))
                  .map((item, index) => (
                    <motion.div
                      className="skItem"
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 0.4,
                          ease: "easeOut",
                          delay: 0.05 * index,
                        },
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow:
                          "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="skill-icon">{item.img}</div>
                      <span>{item.name}</span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
