import "./About.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="about-background">
        <div className="bg-circle circle1"></div>
        <div className="bg-circle circle2"></div>
      </div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
      >
        <motion.h2
          className="sectionTittle"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          About <span>Me</span>
        </motion.h2>

        <div className="about-container">
          <motion.div
            className="imgContainer"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.8,
              },
            }}
          >
            <img
              src="../myImg.webp"
              loading="lazy"
              alt="about"
              style={{
                filter: "grayscale(100%)",
                transition: "filter 0.3s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.filter = "none")}
              onMouseLeave={e => (e.currentTarget.style.filter = "grayscale(100%)")}
            />
            <div className="img-border"></div>
          </motion.div>

          <div className="about-info">
            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            >
              <h3>A Full Stack Developer based in Morocco</h3>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2 },
                }}
              >
                Hi, I'm Az-eddine Serhani, a 20-year-old web developer from
                Morocco. Passionate about technology and problem-solving, I dive
                into web development to tackle challenges and innovate. Whether
                it's front-end design or back-end logic, I thrive on pushing
                boundaries and creating inspiring solutions. Excited for the
                journey ahead!
              </motion.p>

              <motion.div
                className="about-stats"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.3 },
                }}
              >
                <div className="stat-item">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
