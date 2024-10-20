import { Linkedin, Github, Twitter } from "lucide-react";
import Profile from "../../assets/profile.jpeg";
import Logo from "../../assets/favicon.png";
import { motion } from "framer-motion";

const links = [
  {
    id: 1,
    title: "About",
    link: "#about",
  },
  {
    id: 2,
    title: "Portfolio",
    link: "#portfolio",
  },
  {
    id: 3,
    title: "Contact",
    link: "#contact",
  },
];

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Delay for staggered animation
      duration: 0.5,
    },
  }),
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

// Variants for the links animation (staggered)
const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // staggered animation based on index
      duration: 0.5,
    },
  }),
};

const typingAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.2,
      staggerChildren: 0.1, // Each letter will appear one after the other
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const buttonAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5, // Button will appear after the text
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    <div className="relative w-full h-[100vh] px-6 sm:px-10 md:px-20 py-10 text-slate-200">
      {/* Navbar */}
      <div className="flex justify-between items-center lg:p-5 lg:pb-20">
        {/* Animated Logo */}
        <motion.img
          src={Logo}
          alt="logo"
          className="w-10"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Animated Links */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-10">
          {links.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.link}
              className="hover:text-[#efc071]"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <span className="font-semibold">{item.title}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col gap-5 h-auto px-4 sm:px-10 md:px-20 lg:px-40 pt-10 sm:pt-15 md:pt-20 pb-10 sm:pb-12 md:pb-16">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="uppercase text-2xl sm:text-3xl md:text-4xl">
            I&apos;m
          </span>
          <motion.span
            className="font-semibold text-[#efc071]"
            initial="hidden"
            animate="visible"
            variants={typingAnimation}
          >
            {" Nikhil Sarode".split("").map((letter, index) => (
              <motion.span key={index} variants={letterAnimation}>
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </div>

      <motion.span
        className="w-full sm:w-[45ch] md:w-[50ch] text-base sm:text-lg"
        initial="hidden"
        animate="visible"
        variants={textAnimation}
      >
        Full-stack developer skilled in building user-centric apps with React,
        Node.js, and Tailwind CSS.
      </motion.span>

      <motion.a
        href="#contact"
        initial="hidden"
        animate="visible"
        variants={buttonAnimation}
      >
        <button className="font-semibold border-2 border-[#efc071] w-[40%] sm:w-[30%] md:w-[15%] lg:w-[10%] rounded-md p-2 hover:bg-[#efc071] hover:border-slate-950 text-[#efc071] hover:text-slate-950 mt-4">
          Contact Me
        </button>
      </motion.a>
    </div>

      {/* Social Links */}
      <div className="relative flex justify-end items-end flex-col gap-6 sm:gap-8 md:gap-10">
        <span className="absolute bottom-[-150%] md:top-[-150%] -translate-x-3 h-40 rounded-md bg-[#efc071] w-1" />

        {[Linkedin, Github, Twitter].map((Icon, i) => (
          <motion.span
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={iconVariants}
            className="cursor-pointer"
          >
            <Icon className="size-6" />
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Home;
