import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import codeTypingImage from "@/assets/codeTypingImage.png";
import { motion } from "framer-motion";
import resumePDF from "@/assets/Fernando Marturet Resume.pdf";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Resume = ({ setSelectedPage }: Props) => {
  return (
    <section id="resume" className="mt-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Resume)}
        className="flex flex-col bg-primary-100 md:px-20 px-10 gap-10 md:gap-0"
      >
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-20 md:py-[100px]">
          {/*LOGO*/}
          <div className="min-w-[400px] max-w-[400px] md:basis-1/4">
            <img src={codeTypingImage} />
          </div>

          {/*HEADER*/}
          <div className="basis-1/3 md:min-w-[500px] flex flex-col justify-center gap-5">
            <HText>Work Experience</HText>
            <p className="md:text-xl font-bold leading-10 md:leading-10">
              Here is a brief overview of my work experience. Though I was
              initially employed by CanvasPrints.com as a Bubble.io developer I
              have since participated in a number of projects that have taught
              me a lot about web development and programming in general.
            </p>
            <div className="flex md:gap-10 gap-5">
              <a
                href={resumePDF} // Replace with the actual path to your PDF file
                className="md:text-xl min-w-[150px] md:min-w-[200px] border-2 p-5 rounded-lg basis-1/3 font-bold hover:bg-neon-50 hover:bg-opacity-30 transition-all duration-300 ease-in-out text-center"
                download // This attribute suggests that the link is used for downloading the resource
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/*WORK EXPERIENCE */}

        <div className="flex md:flex-row flex-col justify-center items-start md:gap-10 gap-5 md:mb-20">
          <div>
            <h3 className="text-3xl text-neon-50">2021 - Present</h3>
          </div>

          <div className="basis-2/3 flex flex-col gap-5">
            <h4 className="text-lg md:text-3xl font-bold">
              Junior Web Developer @ CanvasPrints.com
            </h4>
            <p className="md:text-xl font-bold">
              • Collaborated with designers and other developers to ensure
              integration of front-end and back-end functionality.
            </p>
            <p className="md:text-xl font-bold">
              • Worked with a variety of technologies including but not limited
              to React, MongoDB, Postgres, Express, Python, Bubble IO.
            </p>
            <p className="md:text-xl font-bold">
              • Developed and maintained Bubble.io applications.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-start md:gap-10 gap-5">
          <div>
            <h3 className="text-3xl text-neon-50">2020 - 2021</h3>
          </div>

          <div className="basis-2/3 flex flex-col gap-5">
            <h4 className="text-lg md:text-3xl font-bold">
              Social Media Customer/Sales Rep @ OceanX
            </h4>
            <p className="md:text-xl font-bold">
              • Provided customer service for multiple brands, including
              troubleshooting and resolving customer complaints/issues with
              products and troubleshooting client web applications.
            </p>
            <p className="md:text-xl font-bold">
              • Met sales goals and provided support to sales team.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
