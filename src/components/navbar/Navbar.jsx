import "./Navbar.scss";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <p>Az-eddine serhani</p>
      </div>
      <div className="centre">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li>About Me</li>
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li>Skills</li>
        </Link>
         <Link 
      activeClass="active" 
      to="project" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
        >
          
        <li>Projects</li>
        </Link>
         <Link 
      activeClass="active" 
      to="contact" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
        >
          
        <li>Contact Me</li>
    </Link>
      </div>
      <div className="right">
        <a
          href="../../public/myCv.pdf"
          download="Az-eddine_Serhani_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            Resume
            <FileDownloadOutlinedIcon />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
