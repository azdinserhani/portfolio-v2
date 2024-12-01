import "./Navbar.scss";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <p>Az-eddine serhani</p>
      </div>
      <div className="centre">
        <li>About Me</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact Me</li>
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
