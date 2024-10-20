import Skills from "./Skills";
import { motion } from 'framer-motion'

const headerAnimation = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const descriptionAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const About = () => {
  return (
    <div
      id="about"
      className="relative w-full min-h-[100vh] py-10 text-slate-200 px-6 sm:px-10 md:px-20 lg:px-40 pt-10 sm:pt-15 lg:pt-20"
    >
      {/* Header */}
      <motion.div
        className="font-semibold text-4xl sm:text-5xl md:text-6xl"
        initial="hidden"
        animate="visible"
        variants={headerAnimation}
      >
        About
      </motion.div>

      {/* Description */}
      <motion.div
        className="pt-10 sm:pt-15 lg:pt-20 flex flex-col sm:flex-row justify-start items-start gap-6 sm:gap-10"
        initial="hidden"
        animate="visible"
        variants={descriptionAnimation}
      >
        <span className="w-40 sm:w-60 lg:w-72 rounded-md bg-[#efc071] h-1 mt-3" />
        <p className="text-base sm:text-lg md:text-xl max-w-full sm:max-w-[70ch] lg:max-w-[80ch]">
          A software developer with expertise in building scalable, user-centric
          applications using modern technologies like React, Node.js, and
          Tailwind CSS. Experienced in full-stack development, including
          front-end design, back-end logic, and API integration, with a focus on
          creating efficient, clean code and seamless user experiences.
          Passionate about solving complex problems and continuously improving
          through learning and collaboration.
        </p>
      </motion.div>

        <Skills />
    </div>
  );
};

export default About;
