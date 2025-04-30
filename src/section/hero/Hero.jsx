import "./Hero.scss";
import { motion } from "framer-motion";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import { social } from "../../mockData";

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
            
            <p>Passionate about clean code and user-centric design. Creating innovative web solutions that deliver exceptional user experiences.</p>
            
            <div className="cta-buttons">
              <motion.a
                href="../../public/myCv.pdf"
                download="Az-eddine_Serhani_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button>
                  Download Resume
                  <FileDownloadOutlinedIcon />
                </button>
              </motion.a>
              <motion.a 
                href="#Contact" 
                className="secondary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button>Get In Touch</button>
              </motion.a>
            </div>
            
            <div className="social">
              {social.map((item, index) => {
                return (
                  <motion.a
                    key={index}
                    href={item.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ 
                      scale: 1.1,
                      color: "#ff5722",
                      transition: { duration: 0.2 }
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.8 + (0.1 * index),
                      },
                    }}
                  >
                    {item.icon}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div
            className="right"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }}
          >
            <div className="image-container">
              <img src="../MyImg.jpeg" alt="Az-eddine Serhani" />
              <div className="image-border"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
