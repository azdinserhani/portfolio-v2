import "./Hero.scss";
import { motion } from "framer-motion";
import { FaLinkedin, FaBriefcase } from "react-icons/fa";

const Hero = () => {
  const name = "Az-eddine serhani.".split("");

  return (
    <div className="hero" id="Home">
      <div className="hero-background">
        <div className="bg-circle circle1"></div>
        <div className="bg-circle circle2"></div>
        <div className="bg-circle circle3"></div>
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
      >
        <div className="info">
          <motion.div
            className="left"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              },
            }}
          >
            <motion.div
              className="intro-tag"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Welcome to my portfolio
            </motion.div>

            <h1>
              Hello I'm <br />
              <span className="name-animation">
                {name.map((char, index) => {
                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            </h1>

            <div className="title-container">
              <h2>
                Full Stack <span>Developer</span>
              </h2>
              <div className="location">
                <div className="location-dot"></div>
                <h2>Based In Morocco</h2>
              </div>
            </div>

            <p>
              I help businesses grow with fast, scalable, and user-friendly web
              apps.
            </p>

            <div className="cta-buttons">
              <motion.a
                href="https://www.linkedin.com/in/az-eddine-serhani-32033a288/"
                rel="noopener noreferrer"
                className="primary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button>Let’s Connect on LinkedIn</button>
              </motion.a>
              <motion.a
                href="#Contact"
                className="secondary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button>Hire Me</button>
              </motion.a>
            </div>

            {/* Stats: LinkedIn followers and clients handled */}
            <motion.div
              className="stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                className="stat-card"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                aria-label="LinkedIn followers"
              >
                <div className="stat-icon">
                  <FaLinkedin />
                </div>
                <div className="stat-value">3.5k+</div>
                <div className="stat-label">LinkedIn Followers</div>
              </motion.div>

              <motion.div
                className="stat-card"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                aria-label="Clients handled"
              >
                <div className="stat-icon">
                  <FaBriefcase />
                </div>
                <div className="stat-value">12+</div>
                <div className="stat-label">Clients Handled</div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="right"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.3 },
            }}
          >
            <div className="image-container">
              <img src="../myImg.webp" alt="Az-eddine Serhani" />
              <div className="image-border"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
