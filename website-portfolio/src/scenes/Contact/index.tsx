import { SelectedPage } from "@/shared/types";
import { useForm } from "react-hook-form";
import HText from "@/shared/HText";
import consultingImage from "@/assets/consulting.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-50 px-5 py-5 placeholder-white text-xl`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="pt-20 pb-32 bg-primary-100">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        className="flex flex-col md:flex-row justify-center items-center gap-20 md:py-[100px]"
      >
        {/* LEFT SIDE */}
        <div className="md:basis-1/4 md:min-w-[400px] flex flex-col gap-10">
          <HText>Let's chat.</HText>
          <img
            className="max-w-[300px] md:max-w-full mx-auto"
            src={consultingImage}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="basis-3/6 flex flex-col gap-10 px-5">
          <h3 className="md:text-3xl font-bold">Send me a message.</h3>
          <form
            target="_blank"
            onSubmit={onSubmit}
            method="POST"
            action="https://formsubmit.co/3b6b82f2a7bac919421e5f04d25c9f0b"
          >
            <input
              className={inputStyles}
              type="text"
              placeholder="NAME"
              {...register("name", { required: true, maxLength: 100 })}
            />{" "}
            {errors.name && (
              <p className="mt-1 text-primary-500">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            <input
              className={inputStyles}
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />{" "}
            {errors.email && (
              <p className="mt-1 text-primary-500">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email."}
              </p>
            )}
            <textarea
              className={inputStyles}
              rows={4}
              cols={50}
              placeholder="MESSAGE"
              {...register("message", { required: true, maxLength: 2000 })}
            />{" "}
            {errors.message && (
              <p className="mt-1 text-primary-500">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
            <button
              type="submit"
              className="md:text-xl min-w-[150px] md:min-w-[200px] border-2 p-5 rounded-lg basis-1/3 font-bold hover:bg-neon-50 hover:bg-opacity-30 transition-all duration-300 ease-in-out"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
