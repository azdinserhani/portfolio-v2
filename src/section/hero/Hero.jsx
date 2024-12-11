import "./Hero.scss";
import Navbar from "../../components/navbar/Navbar";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { delay, motion } from "framer-motion";
import { social } from "../../mockData";
const Hero = () => {
  const socialVariant = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const name = "Az-eddine serhani.".split("");

  return (
    <div className="hero">
      <Navbar />
      <div className="info">
        <motion.div
          className="left"
          initial={{ opacity: 0, y: 200 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
              delay: 0.3,
            },
          }}
        >
          <h1>
            Hello I'am <br />
            {name.map((char, index) => {
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, delay: 0.15 * index }}
                >
                  {char}
                </motion.span>
              );
            })}
            {/* <span>Az-eddine serhani.</span> */}
          </h1>
          <h2>
            Full Stack <span>Developer</span>{" "}
          </h2>
          <h2>Based In Morocco</h2>
          <p>
            Az-eddine Serhani, a dedicated 20-year-old web developer from
            Morocco, passionate about leveraging technology to solve complex
            problems and drive innovation.
          </p>
          <div className="social">
            {social.map((item, index) => {
              return (
                <motion.a
                  key={index}
                  href={item.link}
                  initial={{ opacity: 0, y: 200 }}
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: 0.1 * index,
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
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
        >
          <img src="../profile.jpg" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
