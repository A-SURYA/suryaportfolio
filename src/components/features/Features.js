import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { MdDeveloperMode } from "react-icons/md";
import { FiFigma } from "react-icons/fi";
import { IoLogoLaravel } from "react-icons/io5";
import { DiResponsive } from "react-icons/di";
import { IoIosGitNetwork } from "react-icons/io";
import { SiJira } from "react-icons/si";
import { MdSwitchAccessShortcutAdd } from "react-icons/md";
// import { featuresData } from "../../data/data";
const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
        title="Front End Developer"
        des="A front-end web developer designs and implements the user interface and user experience of websites or web applications using React Js, Vue Js, and Jquery"
        icon={<MdDeveloperMode/>}
        />
        <Card
        title="UI/UX Designer"
        des="Structured notes encompassing research, wireframes, prototypes, visual design, usability testing, and project updates, facilitating an efficient UI/UX design process."
        icon={<FiFigma/>}
        />
        <Card
        title="Responsive & Cross-Browser Design"
        des="Develops adaptive layouts that deliver consistent user experiences across different devices and browsers."
        icon={<DiResponsive />}
        />
        <Card
        title="API Integration & State Management"
        des="Experience in connecting front-end applications with backend APIs using RESTful services and managing state with RxJS, Redux, or NgRx."
        icon={<IoIosGitNetwork />}
        />
        <Card
        title="Tools & Version Control"
        des="Proficient with Git, GitHub, VS Code, Postman, Figma, and JIRA, ensuring smooth project management and collaboration across teams."
        icon={<SiJira  />}
        />
        <Card
        title="Continuous Learning & Innovation"
        des="Passionate about exploring new frameworks, libraries, and design trends to deliver modern, efficient, and maintainable web solutions."
        icon={<MdSwitchAccessShortcutAdd  ira  />}
        />
        {/* {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))} */}
      </div>
    </section>
  );
};

export default Features;