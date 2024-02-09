import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen  md:w-full bg-gradient-to-b from-gray-800 to-black py-6"
    >
      <div className="md:items-start md:w-full items-start h-full pt-0 md:pt-16 flex flex-col gap-24 md:px-40 px-12">
        <h1 className="text-white text-4xl items-start border-b-4 border-gray-500 font-semibold">
          {" "}
          About{" "}
        </h1>
        <p className="text-base md:text-xl font-semibold text-white ">
          I'm a final-year BTech enthusiast deeply passionate about software
          development. My journey involves mastering web development, with a
          knack for crafting dynamic applications using technologies such as
          React, Tailwind CSS, Express, and MongoDB. Beyond web development, I
          find joy in unraveling coding challenges on platforms like LeetCode,
          GeeksforGeeks, and CodeChef, continually enhancing my problem-solving
          acumen. My project portfolio not only highlights my proficiency in web
          development but also showcases ventures into the fascinating realms of
          machine learning, NLP, and computer vision. Eager to stay on the
          cutting edge, I embrace every opportunity to learn, innovate, and
          contribute in the dynamic and evolving tech landscape.
        </p>
      </div>
    </div>
  );
};

export default About;
