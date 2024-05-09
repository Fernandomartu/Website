import React, { useState } from "react";
import { motion } from "framer-motion";
import { BallTriangle } from "react-loader-spinner";
import { bubbleProject } from "@/shared/types"; // Ensure you have this type or define it if needed
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  projects: bubbleProject[];
  handleWatchDemoClick: (videoSrc: string) => void;
};

const BubbleProjects: React.FC<Props> = ({
  projects,
  handleWatchDemoClick,
}) => {
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);
  const [loading, setLoading] = useState(
    Object.fromEntries(projects.map((project) => [project.id, true]))
  );

  const handleVideoLoaded = (id: number) => {
    setLoading((prev) => ({ ...prev, [id]: true })); // Set false to mark loading as complete
  };

  const isAboveMediumScreens = useMediaQuery("(min-width: 1450px)");

  if (!isAboveMediumScreens) {
    return (
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="mb-4 bg-gray-800 text-white rounded-lg"
          >
            {loading[project.id] && (
              <div className="flex flex-col justify-center items-center text-xl text-neon-50 p-10 gap-10">
                <BallTriangle color="#5DEECE" />
                <h1>Project Loading...</h1>
              </div>
            )}
            <video
              className="w-full rounded-t-lg"
              autoPlay
              playsInline
              muted
              onCanPlayThrough={() => handleVideoLoaded(project.id)}
              style={{
                display: loading[project.id] ? "none" : "block",
              }}
            >
              <source src={project.videoSrc} type="video/mp4" />
            </video>
            {!loading[project.id] && (
              <div className="flex flex-col p-4 gap-y-4">
                <h1 className="text-white text-3xl md:text-5xl">
                  {project.name}
                </h1>
                <h1 className="text-white text-3xl md:text-4xl">
                  {project.type}
                </h1>
                <p className="text-white text-xl md:text-2xl leading-10 md:leading-10">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 rounded px-2 py-1 text-xl text-neon-50 gap-2 font-bold wrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  className="text-2xl text-neon-50 font-bold border-2 p-5 rounded-lg w-full hover:bg-neon-50 hover:text-black"
                  onClick={() => handleWatchDemoClick(project.youtubeLink)}
                >
                  Watch Demo
                </button>
                <button
                  className="text-2xl text-neon-50 font-bold border-2 p-5 rounded-lg w-full hover:bg-neon-50 hover:text-black"
                  onClick={() => window.open(project.url, "_blank")}
                >
                  Visit Site
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="lg:flex flex-nowrap gap-4 mt-20 w-full">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative rounded-lg w-full h-full overflow-hidden" // ensure overflow is hidden to maintain rounded corners
          onMouseEnter={() => setHoveredProjectId(project.id)}
          onMouseLeave={() => setHoveredProjectId(null)}
        >
          {loading[project.id] && (
            <div className="absolute inset-0 flex justify-center items-center z-50">
              <BallTriangle color="#5DEECE" />
            </div>
          )}
          <motion.video
            className="relative rounded-lg w-full h-full"
            playsInline
            autoPlay
            muted
            onCanPlayThrough={() => handleVideoLoaded(project.id)}
            style={{
              opacity: loading[project.id]
                ? 0
                : hoveredProjectId === project.id
                ? 0.2
                : 1,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: loading[project.id]
                ? 0
                : hoveredProjectId === project.id
                ? 0.2
                : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <source src={project.videoSrc} type="video/mp4" />
          </motion.video>
          {!loading[project.id] && hoveredProjectId === project.id && (
            <motion.div
              className="absolute inset-0 flex-col p-5 mt-5 space-y-4 z-[30] h-full overflow-y-auto overflow-x-hidden"
              style={{
                opacity: 1,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-white text-3xl md:text-5xl">
                {project.name}
              </h1>
              <h1 className="text-white text-3xl md:text-4xl">
                {project.type}
              </h1>
              <p className="text-white text-xl md:text-2xl leading-10 md:leading-10">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-5">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="flex sm:text-xl text-neon-50 gap-2 font-bold wrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                className="text-2xl text-neon-50 font-bold border-2 p-5 rounded-lg w-full hover:bg-neon-50 hover:text-black"
                onClick={() => handleWatchDemoClick(project.youtubeLink)}
              >
                Watch Demo
              </button>
              <button
                className="text-2xl text-neon-50 font-bold border-2 p-5 rounded-lg w-full hover:bg-neon-50 hover:text-black"
                onClick={() => window.open(project.url, "_blank")}
              >
                Visit Site
              </button>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BubbleProjects;
