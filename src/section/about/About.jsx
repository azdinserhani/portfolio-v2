import "./About.scss";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="about" id="about">
      <motion.div
        className="imgContainer"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
      >
        <img src="../about.jpg" alt="" />
      </motion.div>
      <div className="info">
        <motion.h2
          className="sectionTittle"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          AboutMe
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          Hi, I'm Az-eddine Serhani, a 20-year-old web developer from Morocco.
          Passionate about technology and problem-solving, I dive into web
          development to tackle challenges and innovate. Whether it's front-end
          design or back-end logic, I thrive on pushing boundaries and creating
          inspiring solutions. Excited for the journey ahead!
        </motion.p>
      </div>{" "}
    </div>
  );
};

export default About;
