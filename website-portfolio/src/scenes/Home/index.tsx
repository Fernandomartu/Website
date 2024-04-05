import HText from "@/shared/HText";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import SocialMediaApp from "@/assets/Socialmediaapp.png";
import visitorTracker from "@/assets/visitor-tracker.png";
import gymApp from "@/assets/gymapp.png";
import gpteach from "@/assets/GPTeachProjectDemo.mp4";
import evogym from "@/assets/evogym.mp4";
import sociopedia from "@/assets/sociopedia.mp4";
import sersha from "@/assets/sersha.mp4";
import epicprints from "@/assets/epicprint.mp4";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ImCancelCircle } from "react-icons/im";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

type fullstackProject = {
  id: number;
  type: string;
  name: string;
  description: string;
  technologies: Array<string>;
  videoSrc: string;
  githubLink: string;
  url: string;
};

type bubbleProject = {
  id: number;
  type: string;
  name: string;
  description: string;
  technologies: Array<string>;
  videoSrc: string;
  url: string;
};

const Home = ({ setSelectedPage }: Props) => {
  const [gitProjectOneHovered, setGitProjectOneHovered] =
    useState<boolean>(false);

  const [gitProjectTwoHovered, setGitProjectTwoHovered] =
    useState<boolean>(false);

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const handleProjectClick = (url: string) => {
    window.open(url, "_blank");
  };

  const [selectedView, setSelectedView] = useState<string>("Fullstack");
  const [hoveredProjects, setHoveredProjects] = useState<number[]>([]);
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedVideoSrc, setSelectedVideoSrc] = useState<string>("");
  const [popupHovered, setPopupHovered] = useState<boolean>(false);

  const fullstackProjects: fullstackProject[] = [
    {
      id: 1,
      type: "Frontend Application",
      name: "Evogym",
      description:
        "A simple frontend application built with typescript and react. Features motion library for animations and react hook forms for form validation.",
      technologies: ["React", "Typescript", "Motion", "React-hook-form"],
      videoSrc: evogym,
      githubLink: "https://github.com/Fernandomartu/TS-sport-app",
      url: "https://ts-sport-app.pages.dev/",
    },
    {
      id: 2,
      type: "PERN",
      name: "GPTeach",
      description:
        "An AI powered tutor. Ask it about any topic and start learning. ChatGPT is integrated into a Threejs animated robot. The AI is also instructed and given access to a CanvasJS whiteboard to draw and display text. This project was built using the ChatGPT assistants API (in beta), which is why response times from the AI can be slow.",
      technologies: [
        "React",
        "Redux",
        "Express",
        "Postgres",
        "ThreeJS",
        "ChatGPT",
        "Typescript",
      ],
      videoSrc: gpteach,
      githubLink: "https://github.com/Fernandomartu/GPteach-clone",
      url: "https://gpteach-frontend.onrender.com/",
    },
    {
      id: 3,
      type: "MERN",
      name: "Sociopedia",
      description:
        "A barebones social media application. Allows you to create an account, login, add friends, create posts and upload images.",
      technologies: ["React", "Redux", "Express", "MongoDB"],
      videoSrc: sociopedia,
      githubLink: "https://github.com/Fernandomartu/MERN-portfolio-project",
      url: "https://mern-social-media-frontend-15rx.onrender.com/",
    },
  ];

  const bubbleProjects: bubbleProject[] = [
    {
      id: 1,
      type: "Bubble.io",
      name: "Sersha",
      description:
        "A social media education app for pre-teens. This app was built for a client using Bubble.io.",
      technologies: ["Bubble.io"],
      videoSrc: sersha,
      url: "https://sersha-26410.bubbleapps.io/",
    },
    {
      id: 2,
      type: "Bubble.io",
      name: "Epicprint.com",
      description:
        "A simple frontend website showcasing products and services offered by Epicprint.",
      technologies: ["Bubble.io"],
      videoSrc: epicprints,
      url: "https://epicprint.com/",
    },
  ];

  const handleProjectHover = (projectId: number) => {
    setHoveredProjects((prevHoveredProjects) => [
      ...prevHoveredProjects,
      projectId,
    ]);
  };

  const handleProjectUnhover = (projectId: number) => {
    setHoveredProjects((prevHoveredProjects) =>
      prevHoveredProjects.filter((id) => id !== projectId)
    );
  };

  const handleWatchDemoClick = (videoSrc: string) => {
    setSelectedVideoSrc(videoSrc);
    setShowPopup(true);
  };

  // Function to handle mouse enter event on the popup
  const handlePopupMouseEnter = () => {
    setPopupHovered(true);
  };

  // Function to handle mouse leave event on the popup
  const handlePopupMouseLeave = () => {
    setPopupHovered(false);
  };

  const topRowProjects = fullstackProjects.slice(0, 2);
  const bottomRowProjects = fullstackProjects.slice(-2);

  useEffect(() => {
    console.log("hoveredProjects state changed:", hoveredProjects);
  }, [hoveredProjects]);

  return (
    <section id="home" className="bg-primary-100 md:px-4">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="flex-col pt-40"
      >
        <div className="flex justify-evenly">
          <h1
            className={`sm:text-3xl text-xl mb-10 md:px-10 px-5 font-bold cursor-pointer ${
              selectedView === "Fullstack" ? "text-neon-50" : "text-white"
            }`}
            onClick={() => setSelectedView("Fullstack")}
          >
            Fullstack
          </h1>
          <h1
            className={`sm:text-3xl text-xl mb-10 md:px-10 px-5 font-bold cursor-pointer ${
              selectedView === "Bubble" ? "text-neon-50" : "text-white"
            }`}
            onClick={() => setSelectedView("Bubble")}
          >
            Bubble.io
          </h1>
        </div>
        {showPopup && (
          <div
            className="fixed top-20 left-0 w-full bg-black bg-opacity-50 flex justify-center items-center z-50"
            onMouseEnter={handlePopupMouseEnter}
            onMouseLeave={handlePopupMouseLeave}
          >
            <div className="relative flex w-full items-center justify-center">
              {popupHovered && (
                <button
                  className="absolute flex items-center justify-center bottom-[100px] text-2xl font-bold text-black z-40 w-[200px] bg-white h-[70px] rounded-lg hover:bg-black hover:text-white"
                  onClick={() => setShowPopup(false)}
                >
                  Close Demo
                </button>
              )}
              <video controls autoPlay className="w-[80%]">
                <source src={selectedVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
        {selectedView === "Bubble" && isAboveMediumScreens && (
          <div className="lg:flex flex-nowrap gap-4 mt-20 w-full">
            {bubbleProjects.map((project) => (
              <div
                key={project.id}
                className="relative rounded-lg min-w-[400px] h-full"
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
              >
                <motion.div
                  className="flex-col absolute ml-5 mt-5 space-y-4 z-[30] h-[100%] overflow-y-auto overflow-x-hidden w-[100%]"
                  style={{
                    opacity: hoveredProjectId === project.id ? 1 : 0,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredProjectId === project.id ? 1 : 0,
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
                </motion.div>
                <motion.div
                  className="absolute bottom-0 w-full space-y-4 z-[30] overflow-y-auto overflow-x-hidden"
                  style={{
                    opacity: hoveredProjectId === project.id ? 1 : 0,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredProjectId === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    className="text-2xl text-neon-50 font-bold border-2 p-5 rounded-lg w-full hover:bg-neon-50 hover:text-black"
                    onClick={() => handleWatchDemoClick(project.videoSrc)}
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
                {/*video*/}
                <motion.video
                  className="rounded-lg w-[100%] h-full"
                  autoPlay
                  muted
                  style={{
                    opacity: hoveredProjectId === project.id ? 0.5 : 1,
                  }}
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: hoveredProjectId === project.id ? 0.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <source src={project.videoSrc} type="video/mp4" />
                </motion.video>
              </div>
            ))}
          </div>
        )}
        {selectedView === "Bubble" && !isAboveMediumScreens && (
          <div className="lg:flex flex-nowrap gap-4">
            {bubbleProjects.map((project) => (
              <div
                key={project.id}
                className="w-full mb-5 rounded-lg min-w-[400px] h-full"
              >
                {/*video*/}
                <video
                  className="rounded-lg"
                  width="100%"
                  height="100%"
                  autoPlay
                  muted
                >
                  <source src={project.videoSrc} type="video/mp4" />
                </video>
                <div className="flex-col ml-5 mr-5 mt-5 space-y-4 z-[30] h-[85%] overflow-y-auto overflow-x-hidden">
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
                    onClick={() => handleWatchDemoClick(project.videoSrc)}
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
              </div>
            ))}
          </div>
        )}
        {selectedView === "Fullstack" && isAboveMediumScreens && (
          <div className="lg:flex flex-nowrap gap-4 justify-center mt-20">
            {fullstackProjects.map((project, index) => (
              <div
                key={project.id}
                className={`flex w-full mb-4 rounded-lg relative justify-center items-center h-fit self-center ${
                  index === 1 ? "lg:w-1/2" : "lg:w-1/3"
                }`}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
              >
                <motion.div
                  className="flex-col absolute ml-5 space-y-4 z-[30] h-[75%] overflow-y-auto overflow-x-hidden w-[95%]"
                  style={{
                    opacity: hoveredProjectId === project.id ? 1 : 0,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredProjectId === project.id ? 1 : 0,
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
                  <div className="w-0">
                    <a
                      className=""
                      id="git-button-two"
                      href={project.githubLink}
                      target="_blank"
                      onMouseOver={() => setGitProjectOneHovered(true)}
                      onMouseLeave={() => setGitProjectOneHovered(false)}
                    >
                      <svg
                        className="w-8 h-8 z-[30]"
                        width="98"
                        height="96"
                        viewBox="0 0 98 96"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                          className={
                            gitProjectOneHovered ? "fill-neon-50" : "fill-white"
                          }
                        />
                      </svg>
                    </a>
                  </div>
                  <button
                    className="text-2xl text-neon-50 font-bold border-2 p-5 rounded-lg w-full hover:bg-neon-50 hover:text-black"
                    onClick={() => handleWatchDemoClick(project.videoSrc)}
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
                <motion.div
                  className="absolute bottom-0 w-full space-y-4 z-[30] overflow-y-auto overflow-x-hidden"
                  style={{
                    opacity: hoveredProjectId === project.id ? 1 : 0,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredProjectId === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>

                {/*video*/}
                <motion.video
                  className="rounded-lg"
                  width="100%"
                  height="100%"
                  autoPlay
                  muted
                  style={{
                    opacity: hoveredProjectId === project.id ? 0.5 : 1,
                  }}
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: hoveredProjectId === project.id ? 0.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <source src={project.videoSrc} type="video/mp4" />
                </motion.video>
              </div>
            ))}
          </div>
        )}

        {selectedView === "Fullstack" && !isAboveMediumScreens && (
          <div className="lg:flex flex-nowrap gap-4">
            {fullstackProjects.map((project) => (
              <div
                key={project.id}
                className="w-full mb-5 rounded-lg min-w-[400px] h-full"
              >
                {/*video*/}
                <video
                  className="rounded-lg"
                  width="100%"
                  height="100%"
                  autoPlay
                  muted
                >
                  <source src={project.videoSrc} type="video/mp4" />
                </video>
                <div className="flex-col ml-5 mr-5 mt-5 space-y-4 z-[30] h-[85%] overflow-y-auto overflow-x-hidden">
                  <h1 className="text-white text-3xl md:text-5xl">
                    {project.name}
                  </h1>
                  <h1 className="text-white text-3xl md:text-4xl">
                    PERN Stack
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
                    <button
                      className="text-2xl text-neon-50 font-bold border-2 p-5 rounded-lg w-full hover:bg-neon-50 hover:text-black"
                      onClick={() => handleWatchDemoClick(project.videoSrc)}
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
                  <div className="w-0">
                    <a
                      className=""
                      id="git-button-two"
                      href="https://github.com/Fernandomartu/GPteach-clone"
                      target="_blank"
                      onMouseOver={() => setGitProjectOneHovered(true)}
                      onMouseLeave={() => setGitProjectOneHovered(false)}
                    >
                      <svg
                        className="w-8 h-8 z-[30]"
                        width="98"
                        height="96"
                        viewBox="0 0 98 96"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                          className={
                            gitProjectOneHovered ? "fill-neon-50" : "fill-white"
                          }
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Home;
