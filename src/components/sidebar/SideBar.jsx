import { useState } from "react";
import Links from "./Links/Links";
import { delay, motion } from "framer-motion";


import "./SideBar.scss";
import ToggleButton from "./ToggelButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
  },
  transition: {
    delay: 0.5,
    type: "spring",
    stiffness: 20,
    damping: 20,
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sideBar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};
export default SideBar;
