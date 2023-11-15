import HText from "@/shared/HText";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import SocialMediaApp from "@/assets/Socialmediaapp.png";
import visitorTracker from "@/assets/visitor-tracker.png";
import gymApp from "@/assets/gymapp.png";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
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

  return (
    <section id="home" className="bg-primary-100 md:px-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="lg:flex justify-between py-40"
      >
        <div className="lg:basis-2/5 mb-10 px-10">
          <HText>Fernando Marturet</HText>
          <p className="text-neon-50 text-xl mt-2">
            Hey there! Welcome to my portfolio. I am a full stack web developer.
            My projects and work experience demonstrate proficiency in front and
            backend technologies including React, Express, MongoDB, PSQL,
            TypeScript, Python, and Bubble IO.
          </p>
        </div>
        <div className="basis-3/5 flex flex-col">
          <h3 className="text-3xl mb-10 md:px-10 px-5 font-bold">Projects</h3>
          <div className="flex flex-col sm:px-5 px-0 md:gap-40 gap-20">
            <div
              onClick={
                isAboveMediumScreens
                  ? undefined
                  : () => {
                      if (!gitProjectOneHovered) {
                        handleProjectClick(
                          "https://mern-social-media-frontend-15rx.onrender.com/"
                        );
                      }
                    }
              }
              className="md:flex relative hover:cursor-pointer md:hover:cursor-default hover:border-neon-50 md:hover:border-0 hover:border-2 transition-border"
            >
              <div className="md:basis-2/3 min-w-[500px] max-h-[350px] relative md:left-5 overflow-hidden md:bg-transparent">
                <a
                  href="https://mern-social-media-frontend-15rx.onrender.com/" // Replace with your desired external URL
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // Recommended for security
                >
                  <img
                    className="opacity-20 md:opacity-60 md:hover:opacity-100 transition-opacity cursor-pointer"
                    src={SocialMediaApp}
                  />
                </a>
              </div>
              <div className="flex flex-col md:relative absolute top-0 sm:gap-5 gap-5 md:items-end items-start md:right-5 md:mt-0 mt-5 px-5">
                <h3 className="sm:text-3xl text-lg z-[30] font-bold">
                  MERN Stack
                </h3>
                <h4 className="sm:text-2xl text-lg z-[30] font-bold">
                  Social Media App
                </h4>
                <p className="md:p-5 md:bg-paragraph-50 sm:text-lg z-[30] font-bold">
                  A barebones social media app. Users have the ability to add
                  friends and create posts. Features functional authentication
                  and a light and dark theme.
                </p>
                <ul className="flex sm:text-xl gap-5 z-[30] font-bold text-neon-50">
                  <li>React</li>
                  <li>Redux</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
                <a
                  id="git-button-one"
                  href="https://github.com/Fernandomartu/MERN-portfolio-project"
                  target="_blank"
                  onMouseOver={() => setGitProjectOneHovered(true)}
                  onMouseLeave={() => setGitProjectOneHovered(false)}
                >
                  <svg
                    className="w-8 h-8"
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
            <div
              onClick={
                isAboveMediumScreens
                  ? undefined
                  : () => {
                      if (!gitProjectTwoHovered) {
                        handleProjectClick(
                          "https://mern-vistitor-app-frontend.onrender.com/"
                        );
                      }
                    }
              }
              className="md:flex relative hover:cursor-pointer hover:border-neon-50 md:hover:border-0 hover:border-2 transition-border"
            >
              <div className="flex flex-col md:relative absolute top-0 gap-5 md:items-start items-start md:left-5 md:mt-0 mt-5 px-5">
                <h3 className="sm:text-3xl text-lg z-[30] font-bold">
                  MERN Stack
                </h3>
                <h4 className="sm:text-2xl text-lg z-[30] font-bold">
                  Visitor Tracker
                </h4>
                <p className="md:p-5 md:bg-paragraph-50 sm:text-lg z-[30] font-bold">
                  A simple and effective app for tracking visitors to your
                  enterprise. Features authentication and web sockets for client
                  side data updates.
                </p>
                <ul className="flex sm:text-xl text-neon-50 gap-5 z-[30] font-bold">
                  <li>React</li>
                  <li>Redux</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
                <a
                  className="z-[30]"
                  id="git-button-two"
                  href="https://github.com/Fernandomartu/MERN-visitor-app.git"
                  target="_blank"
                  onMouseOver={() => setGitProjectTwoHovered(true)}
                  onMouseLeave={() => setGitProjectTwoHovered(false)}
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
                        gitProjectTwoHovered ? "fill-neon-50" : "fill-white"
                      }
                    />
                  </svg>
                </a>
              </div>
              <div className="md:basis-2/3 min-w-[600px] min-h-[400px] max-h-[400px] relative md:right-5 overflow-hidden">
                <a
                  href="https://mern-vistitor-app-frontend.onrender.com" // Replace with your desired external URL
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // Recommended for security
                >
                  <img
                    className="opacity-20 md:h-[300px] md:min-h-[300px] min-h-[400px] md:opacity-60 md:hover:opacity-100 transition-opacity cursor-pointer"
                    src={visitorTracker}
                  />
                </a>
              </div>
            </div>
            <div
              onClick={
                isAboveMediumScreens
                  ? undefined
                  : () => {
                      if (!gitProjectOneHovered) {
                        handleProjectClick("https://ts-sport-app.pages.dev/");
                      }
                    }
              }
              className="md:flex relative hover:cursor-pointer md:hover:cursor-default hover:border-neon-50 md:hover:border-0 hover:border-2 transition-border"
            >
              <div className="md:basis-2/3 min-w-[500px] md:max-h-[400px] relative md:left-5 overflow-hidden md:bg-transparent">
                <a
                  href="https://ts-sport-app.pages.dev/" // Replace with your desired external URL
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // Recommended for security
                >
                  <img
                    className="opacity-20 min-h-[400px] sm:min-h-[300px] md:opacity-60 md:hover:opacity-100 transition-opacity cursor-pointer"
                    src={gymApp}
                  />
                </a>
              </div>
              <div className="flex flex-col md:relative absolute top-0 sm:gap-5 gap-5 md:items-end items-start md:right-5 md:mt-0 mt-5 px-5">
                <h3 className="sm:text-3xl text-lg z-[30] font-bold">
                  TypeScript Frontend
                </h3>
                <h4 className="sm:text-2xl text-lg z-[30] font-bold">
                  Gym App
                </h4>
                <p className="md:p-5 md:bg-paragraph-50 sm:text-lg z-[30] font-bold">
                  A static site for a sample gym business. Employs multiple
                  libraries including react hook forms and motion for
                  animations.
                </p>
                <ul className="flex sm:text-xl gap-5 z-[30] font-bold text-neon-50">
                  <li>React</li>
                  <li>Typescript</li>
                </ul>
                <a
                  id="git-button-three"
                  href="https://github.com/Fernandomartu/TS-sport-app.git"
                  target="_blank"
                  onMouseOver={() => setGitProjectOneHovered(true)}
                  onMouseLeave={() => setGitProjectOneHovered(false)}
                >
                  <svg
                    className="w-8 h-8"
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
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
