import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

function Portfolio() {
  const projects = [
    {
      id: 0,
      projectLink: "https://airesu12-tux7.vercel.app/",
      description:
        "Developed a platform to filter resumes based on recruiter-defined job requirements, implemented matching logic to evaluate candidates against required skills, generated insights including skill matches and candidate suitability, and designed a workflow to streamline hiring efficiency.",
      title: "Resume Analyzer",
      technologies: ["Django REST API", "React", "HTML", "Python", "GitHub"],
      media: "/videos/airesume-demo.mp4.mp4",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const projectList = projects.map((project) => {
    const isSelected = project.id === selectedProject.id;
    const className = isSelected ? "text-emerald-300" : "text-stone-300";
    return (
      <motion.li
        key={project.id}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setSelectedProject(project)}
        className={`py-2.5 px-5 my-2.5 mx-0 cursor-pointer max-600:basis-1/5 max-600:py-1 max-600:px-2 max:600:my-1 ${className}`}
      >
        {project.title}
      </motion.li>
    );
  });

  return (
    <div className="flex flex-row-reverse items-center p-5 max-600:h-30rem max-600:flex-col">
      <ul className="p-0 list-none w-44 mr-8 flex-wrap max-600:flex-row max-600:flex max-600:m-0 max-600:w-full">
        {projectList}
      </ul>
      <AnimatePresence mode="wait">
        {selectedProject !== null && (
          <ProjectDetails
            key={selectedProject.id}
            projectLink={selectedProject.projectLink}
            id={selectedProject.id}
            title={selectedProject.title}
            description={selectedProject.description}
            technologies={selectedProject.technologies}
            media={selectedProject.media}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Portfolio;
