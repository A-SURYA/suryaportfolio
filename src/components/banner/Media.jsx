import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedinIn, FaReact, FaVuejs,FaHtml5, FaBootstrap, FaSass, FaGithub, FaAngular, FaSourcetree  } from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";
import { DiJqueryLogo, DiJavascript1 } from "react-icons/di";
import { MdOutlineCss } from "react-icons/md";
import { TbBrandMysql } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div className="mr-5 mb-3">
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://www.instagram.com/your_instagram_username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/surya-a-77357b2a6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaVuejs />
            </span>
            <span className="bannerIcon">
              <DiJqueryLogo />
            </span>
            <span className="bannerIcon">
              <DiJavascript1 />
            </span>
            <span className="bannerIcon">
              <FaHtml5 />
            </span>
            <span className="bannerIcon">
              <MdOutlineCss />
            </span>
            <span className="bannerIcon">
              <FaBootstrap />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaGithub />
            </span>
            <span className="bannerIcon">
              <TbBrandMysql />
            </span>
            <span className="bannerIcon">
              <FaSass/>
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
            <span className="bannerIcon">
              <FaAngular />
            </span>
            <span className="bannerIcon">
              <BiLogoTypescript />
            </span>
            <span className="bannerIcon">
              <FaSourcetree />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media