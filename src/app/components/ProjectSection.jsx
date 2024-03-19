"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sorting Visualizer",
    description: `Deployed a web application using HTML, CSS, and JavaScript for visualizing different sorting algorithms like Selection Sort, Merge Sort, etc. with the functionality of (Processing Speed Control) and (Array Size Control)`,
    image: "/images/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sarcasvik/Sorting-Visualizer"
  },
  {
    id: 2,
    title: "Music-Genre-Recommendation-System",
    description: "Developed a Machine Learning project using Jupyter employing libraries like Librosa, Pandas, MatplotLib etc.,and advanced algorithms for music classification and personalized music recommendations based on user queries.",
    image: "/images/2.png",
    tag: ["All", "Others"],
    gitUrl: "https://github.com/sarcasvik/Music_Genre_Classification-Recommendation",
  },
  {
    id: 3,
    title: "AirBnb Clone",
    description: "Made a clone of AirBnb using Bubble.io and integrated google authentication. for the same",
    image: "/images/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://airbnb-clone-88072.bubbleapps.io/version-test",
  },
  {
    id: 4,
    title: "E-commerce Sales Dashboard",
    description: "Architected a dynamic e-commerce sales dashboard in Power BI, empowering data-driven decisions through intricate parameters, expert data wrangling, and user-controlled visualizations for impactful analysis.",
    image: "/images/4.jpeg",
    tag: ["All", "Others"],
    gitUrl: "https://github.com/sarcasvik/E-commerce_sales_Dashboard",
  },
  {
    id: 5,
    title: "IntelliGROW",
    description: "Led a team of 5 in developing a fully automated Smart Irrigation and Fertilization System using IOT and Cloud. Combining advanced sensors like NPK, temperature, and moisture sensors for monitoring crop health, optimizing water and nutrient usage, and preventing water wastage through a user-friendly web application.",
    image: "/images/5.jpg",
    tag: ["All", "Others"],
    gitUrl: "https://github.com/sarcasvik/IntelliGROW",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mt-10 md:mt-36 text-white pt-10">
      <h2 className="text-center md:text-5xl text-3xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Others"
          isSelected={tag === "Others"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;