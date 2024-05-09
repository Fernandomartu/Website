import { useState } from "react";
import { motion } from "framer-motion";
import { fullstackProject, bubbleProject, SelectedPage } from "@/shared/types";
import FullstackProjects from "./FullstackProjects";
import BubbleProjects from "./BubbleProjects";
import gpteach from "@/assets/gpteachdemoshort.mp4";
import evogym from "@/assets/evogymshort.mp4";
import sociopedia from "@/assets/sociopediashort.mp4";
import sersha from "@/assets/sershashort.mp4";
import epicprints from "@/assets/epicprint.mp4";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const [selectedView, setSelectedView] = useState<string>("Fullstack");
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
      youtubeLink:
        "https://www.youtube.com/embed/T0f78nZ13us?si=B28geJ5GtoTbsssP",
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
      youtubeLink:
        "https://www.youtube.com/embed/cemPoc7_AeE?si=oPAG0w-ZyT7r1L_r",
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
      youtubeLink:
        "https://www.youtube.com/embed/3dxH175W-Mo?si=7NS91xdw9mOtOFjX",
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
      youtubeLink:
        "https://www.youtube.com/embed/QwvTTEq5sJM?si=DCRUdgYm54crC34f",
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
      youtubeLink:
        "https://www.youtube.com/embed/SndaetVydIY?si=OzG1qKjH2lP2Lly1",
    },
  ];

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
        {selectedView === "Fullstack" && (
          <FullstackProjects
            projects={fullstackProjects}
            handleWatchDemoClick={handleWatchDemoClick}
          />
        )}
        {selectedView === "Bubble" && (
          <BubbleProjects
            projects={bubbleProjects}
            handleWatchDemoClick={handleWatchDemoClick}
          />
        )}
        {showPopup && (
          <div
            className="fixed top-0 h-[100vh] left-0 w-full bg-black bg-opacity-50 flex justify-center items-center z-50"
            onMouseEnter={handlePopupMouseEnter}
            onMouseLeave={handlePopupMouseLeave}
          >
            <div className="relative flex w-full h-[80%] items-center justify-center">
              {popupHovered && (
                <button
                  className="absolute flex items-center justify-center bottom-[100px] text-2xl font-bold text-white z-40 w-[200px] bg-black h-[80px] rounded-lg hover:bg-white hover:text-black"
                  onClick={() => setShowPopup(false)}
                >
                  Close Demo
                </button>
              )}
              <div
                className="video-container w-[80%]"
                style={{ paddingTop: "100px" }}
              >
                <iframe
                  src={selectedVideoSrc}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Home;
