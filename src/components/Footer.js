import React from "react";
import { BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className="flex items-center justify-evenly bg-[#0F0416] text-white flex-wrap px-3 py-4">
      <p className="text-sm text-center m-2">
        Designed and Developed by Mark
      </p>
      <p className="text-sm font-semibold text-center m-2">
        Copyright © 2024 Mark.dev
      </p>
      <span className="flex items-center justify-center gap-7 m-2">
        <a
          href="https://github.com/Kyma-ug"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <BsGithub />
        </a>
        <a
          href="https://x.com/mark_code_ug?t=-XiYd49_KL7AODMyoAs4w&s=09"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <RiTwitterXFill />
        </a>
        <a
          href="https://github.com/Kyma-ug"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/Kyma-ug"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <AiFillInstagram />
        </a>
      </span>
    </div>
  );
}

export default Footer;
