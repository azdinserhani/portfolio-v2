import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const skillsNew = [
  {
    name: "ReactJs",
    img: <FaReact size={"70%"} />,
  },
  {
    name: "Sass",
    img: <FaSass size={"70%"} />,
  },
  {
    name: "Javascript",
    img: <IoLogoJavascript size={"70%"} />,
  },
  {
    name: "Html",
    img: <FaHtml5 size={"70%"} />,
  },
  {
    name: "Css",
    img: <FaCss3Alt size={"70%"} />,
  },
  {
    name: "Nodejs",
    img: <FaNodeJs size={"70%"} />,
  },
  {
    name: "Express js",
    img: <SiExpress size={"70%"} />,
  },
  {
    name: "MongoDb",
    img: <DiMongodb size={"70%"} />,
  },
  {
    name: "Postgresql",
    img: <SiPostgresql size={"70%"} />,
  },
  {
    name: "Bootstrap",
    img: <FaBootstrap size={"70%"} />,
  },
  {
    name: "Github",
    img: <FaGithub size={"70%"} />,
  },
  {
    name: "Socket Io",
    img: <SiSocketdotio size={"70%"} />,
  },
];
export const projectData = [
  {
    num: "01",
    title: "EdClub",
    desc: "EdClub is a Learning Management System (LMS) platform that provides a comprehensive solution for online education. It offers features for course creation, student enrollment, progress tracking, and interactive learning experiences through quizzes and assignments.",
    img: "../EdClub.png",
    isReverced: true,
    gitUrl: "https://github.com/azdinserhani/PFE-2025.git",
  },
  {
    num: "02",
    title: "YumYard",
    desc: "YumYard is a dynamic web application designed to help users discover, manage, and share recipes.",
    img: "../YumYard.png",
    isReverced: false,
    gitUrl: "https://github.com/azdinserhani/YumYard-Client-Side.git",
  },
  {
    num: "03",
    title: "E-Commerce Website",
    desc: "A full-stack e-commerce platform with a React client and an admin panel for managing products, orders, and users. The API supports smooth data handling for a seamless shopping experience.",
    img: "../ecommerce.png",
    isReverced: true,
    gitUrl: "https://github.com/azdinserhani/e-commerce-client-side.git",
  },
  {
    num: "04",
    title: "Glyco Vision",
    desc: "Glyco Vision is a comprehensive web application designed to help users track and manage their blood sugar levels. It provides insightful charts and offers personalized advice based on symptoms. Additionally, it includes features for finding pharmacies on duty and giving patient advice.",
    img: "../pharmacy.png",
    isReverced: false,
    gitUrl: "https://github.com/azdinserhani/Glyco-Vision_clients-site.git",
  },
];
