import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BallTriangle } from "react-loader-spinner";
import { fullstackProject, HoverStates } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  projects: fullstackProject[];
  handleWatchDemoClick: (videoSrc: string) => void;
};

const FullstackProjects: React.FC<Props> = ({
  projects,
  handleWatchDemoClick,
}) => {
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);
  const [loading, setLoading] = useState(
    Object.fromEntries(projects.map((project) => [project.id, true]))
  );

  const handleVideoLoaded = (id: number) => {
    setLoading((prev) => ({ ...prev, [id]: false }));
  };

  const [hoverStates, setHoverStates] = useState<HoverStates>({});

  const isAboveMediumScreens = useMediaQuery("(min-width: 1450px)");

  useEffect(() => {
    const initialHoverStates: HoverStates = {};
    projects.forEach((project) => {
      initialHoverStates[project.id] = false;
    });
    setHoverStates(initialHoverStates);
  }, [projects]);

  const handleMouseEnter = (id: number) => {
    setHoverStates((prev) => ({ ...prev, [id]: true }));
  };

  // Function to handle mouse leave
  const handleMouseLeave = (id: number) => {
    setHoverStates((prev) => ({ ...prev, [id]: false }));
  };

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
                <div className="w-0">
                  <a
                    className=""
                    id="git-button-two"
                    href={project.githubLink}
                    target="_blank"
                    onMouseEnter={() => handleMouseEnter(project.id)}
                    onMouseLeave={() => handleMouseLeave(project.id)}
                  >
                    <svg
                      className={`w-8 h-8 ${
                        hoverStates[project.id] ? "fill-neon-50" : "fill-white"
                      }`}
                      width="98"
                      height="96"
                      viewBox="0 0 98 96"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                    </svg>
                  </a>
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
    <div className="lg:flex flex-nowrap gap-4 justify-center mt-20">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className={`flex w-full mb-4 rounded-lg relative justify-center items-center self-center ${
            index === 1 ? "lg:w-1/2" : "lg:w-1/3"
          }`}
          onMouseEnter={() => setHoveredProjectId(project.id)}
          onMouseLeave={() => setHoveredProjectId(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ height: loading[project.id] ? "400px" : "auto" }}
        >
          {loading[project.id] && (
            <div className="absolute inset-0 flex justify-center items-center z-50 ">
              <BallTriangle color="#5DEECE" />
            </div>
          )}
          <video
            className="relative rounded-lg w-full h-full"
            width="100%"
            height="100%"
            autoPlay
            playsInline
            muted
            onCanPlayThrough={() => handleVideoLoaded(project.id)}
            style={{
              display: loading[project.id] ? "none" : "block",
              opacity: hoveredProjectId === project.id ? 0.2 : 1,
            }}
          >
            <source src={project.videoSrc} type="video/mp4" />
          </video>
          {!loading[project.id] && hoveredProjectId === project.id && (
            <motion.div
              className="flex-col absolute ml-5 space-y-4 z-[30] h-[75%] overflow-y-auto overflow-x-hidden w-[95%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
              <div className="w-0">
                <a
                  className=""
                  id="git-button-two"
                  href={project.githubLink}
                  target="_blank"
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={() => handleMouseLeave(project.id)}
                >
                  <svg
                    className={`w-8 h-8 ${
                      hoverStates[project.id] ? "fill-neon-50" : "fill-white"
                    }`}
                    width="98"
                    height="96"
                    viewBox="0 0 98 96"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                  </svg>
                </a>
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
        </motion.div>
      ))}
    </div>
  );
};

export default FullstackProjects;
