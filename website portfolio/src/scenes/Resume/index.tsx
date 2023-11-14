import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import codeTypingImage from "@/assets/codeTypingImage.png";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Resume = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="resume"
      className="flex flex-col h-[1500px] bg-primary-100 md:px-20 px-10 gap-10 md:gap-0"
    >
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-20 md:py-[100px]">
        {/*LOGO*/}
        <div className="min-w-[400px] max-w-[400px] md:basis-1/4">
          <img src={codeTypingImage} />
        </div>

        {/*HEADER*/}
        <div className="basis-1/3 md:min-w-[500px] flex flex-col justify-center gap-5">
          <HText>Work Experience</HText>
          <p className="text-xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium
            fringilla quam, eget auctor tellus maximus sit amet. Quisque ut
            molestie ipsum, eu finibus ipsum. Nunc dolor ligula, aliquam nec
            lacus sit amet, efficitur fermentum ante. Etiam condimentum semper
            augue, ac facilisis elit luctus id.
          </p>
          <div className="flex gap-10">
            <button className="text-xl border-2 p-5 rounded-lg basis-1/3 font-bold">
              Download CV
            </button>
            <button className="text-xl border-2 p-5 rounded-lg basis-1/3 font-bold">
              Contact
            </button>
          </div>
        </div>
      </div>

      {/*WORK EXPERIENCE */}
      <div className="flex md:flex-row flex-col justify-center items-start md:gap-10 gap-5">
        <div>
          <h3 className="text-3xl text-neon-50">2021 - Present</h3>
        </div>

        <div className="basis-2/3 flex flex-col gap-5">
          <h4 className="text-3xl font-bold">
            Junior Web Developer @ CanvasPrints.com
          </h4>
          <p className="text-xl font-bold">
            • Collaborated with designers and other developers to ensure
            integration of front-end and back-end functionality.
          </p>
          <p className="text-xl font-bold">
            • Worked with a variety of technologies including but not limited to
            React, MongoDB, Postgres, Express, Python, Bubble IO.
          </p>
          <p className="text-xl font-bold">
            • Developed and maintained Bubble.io applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
