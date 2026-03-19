import { motion } from "framer-motion";

function ProjectDetails(project) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="h-90vh mt-2 p-2.5 max-600:h-72 overflow-auto hide-scrollbar max-600:w-full"
    >
      <h3 className="text-3xl max-600:mb-3 mb-6">{project.title}</h3>
      <p className="mb-2 max-600:mb-1">{project.description}</p>
      <h4 className="text-xl max-600:mb-2 mb-4">Technologies Used:</h4>
      <ul className="flex flex-row gap-4 max-600:flex-col">
        {project.technologies.map((tech) => (
          <li className="text-md italic text-stone-50" key={tech}>
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-4 mb-3">
        <a
          href={project.projectLink}
          target="_blank"
          rel="noreferrer"
          className="text-emerald-300 underline"
        >
          View Live Project
        </a>
      </div>
      {project.media.endsWith(".mp4") ? (
        <video
          src={project.media}
          controls
          style={{ width: "100%", marginTop: "10px" }}
        />
      ) : (
        <img
          src={project.media}
          alt={project.title}
          style={{ width: "100%", marginTop: "10px" }}
        />
      )}
    </motion.div>
  );
}

export default ProjectDetails;
