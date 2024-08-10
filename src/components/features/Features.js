import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { MdDeveloperMode } from "react-icons/md";
import { FiFigma } from "react-icons/fi";
import { IoLogoLaravel } from "react-icons/io5";
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
        title="Backend Developer"
        des="A backend developer using PHP and Laravel develops server-side logic and database management to support the functionality and performance of websites"
        icon={<IoLogoLaravel/>}
        />
        {/* {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))} */}
      </div>
    </section>
  );
};

export default Features;