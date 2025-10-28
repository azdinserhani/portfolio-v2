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
import { RiTailwindCssFill } from "react-icons/ri";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SiNestjs } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiN8N } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { RiNotionFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
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
    name: "Tailwind CSS",
    img: <RiTailwindCssFill size={"70%"} />,
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
  {
    name: "Nestjs",
    img: <SiNestjs size={"70%"} />,
  },
  {
    name: "Supabase",
    img: <RiSupabaseFill size={"70%"} />,
  },
  {
    name: "N8N",
    img: <SiN8N size={"70%"} />,
  },
  {
    name: "Nextjs",
    img: <RiNextjsFill size={"70%"} />,
  },

  {
    name: "Notion",
    img: <RiNotionFill size={"70%"} />,
  },
  {
    name: "Figma",
    img: <FaFigma size={"70%"} />,
  },
];
export const projectData = [
  {
    num: "01",
    title: "ProjectLab",
    desc: "ProjectLab helps developers learn by building real-world projects. Get hands-on experience, master modern tools, and create a portfolio that stands out to employers.",
    img: "../projectLab.png",
    isReverced: false,

    link: "https://project-lab-pi.vercel.app/",
  },
  {
    num: "02",
    title: "StageFlow - Internship Management System",
    desc: "A comprehensive full-stack web application for managing student internships and trainees within an organization. Built with React.js frontend and Node.js/Express backend, featuring role-based authentication, document management, and real-time analytics. This project was developed specifically for ONEE and is self-hosted on the company intranet.",
      info: "For security reasons, the project is not publicly accessible.",
    img: "../stageFlow.png",
    isReverced: true,
    gitUrl: "",
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
