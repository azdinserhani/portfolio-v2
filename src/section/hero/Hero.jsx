import "./Hero.scss";
import Navbar from "../../components/navbar/Navbar";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="info">
        <div className="left">
          <h1>
            Hello I'am <br /><span>Az-eddine serhani.</span>
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
            <a href="https://github.com/azdinserhani">
              <GitHubIcon fontSize="inherit" />
            </a>{" "}
            <a href="https://www.facebook.com/azdine.azdine.52438174">
              <FacebookOutlinedIcon fontSize="inherit" />
            </a>{" "}
            <a href="https://www.instagram.com/azedine.dev/">
              <InstagramIcon fontSize="inherit" />
            </a>{" "}
            <a href="https://www.linkedin.com/in/az-eddine-serhani-32033a288/">
              <LinkedInIcon fontSize="inherit" />
            </a>
          </div>
        </div>
        <div className="right">
          <img src="../profile.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
