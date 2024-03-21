import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import girl from "../assets/girl_3d.webp";
import heart from "../assets/heart.svg";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiGooglescholar } from "react-icons/si";

const Hero = () => {
  return (
    <div className={`w-full h-screen flex flex-1`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex-3">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#e35595]">Liza</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A CS grad student with a passion for research and background in
            full-stack development
            {/* <br className="sm:block hidden" /> */}
          </p>
          <div className="flex gap-5 items-center mt-5">
            <a href="https://www.linkedin.com/in/yelizaveta-brus/">
              <FaLinkedin size={40} />
            </a>
            <a href="https://github.com/dolphin323">
              <FaGithub size={40} />
            </a>
            <a href="mailto:brus.lizaveta@gmail.com">
              <IoIosMail size={50} />
            </a>
            <a href="https://scholar.google.ca/citations?user=sbWQ9_wAAAAJ&hl=en&authuser=1">
              <SiGooglescholar size={40} />
            </a>
          </div>
          <div className="flex flex-row items-center w-full">
            <div className="w-full h-1 violet-gradient" />
            <img src={heart} className="w-5 h-5" />
          </div>
        </div>
        <div className="flex-7">
          <img src={girl} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
