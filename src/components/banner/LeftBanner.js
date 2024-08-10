import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Front End Web Developer.","Professional Coder.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Surya A</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span className="text-designColor capitalize">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="rgb(0 252 255)"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Experienced and motivated Front-End Web Developer with 1.5 years of expertise in creating innovative web design and seamless user experience. Proficient in JavaScript, HTML, CSS and with a strong command of Vue.js, React.js, jQuery and modern front-end frameworks. Collaborative team player focused on driving project success through effective cross-functional communication and dynamic implementation of various front-end technologies
        </p>
      </div>
     <Media />
    </div>
  );
}

export default LeftBanner