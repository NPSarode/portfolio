import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

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

const contactAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

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

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative w-full py-10 text-slate-200 bg-[#3a3e40]"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <span className="mt-3 rounded-md bg-[#efc071] h-1 w-full sm:w-1/3" />
        <motion.span initial="hidden"
        animate="visible"
        variants={headerAnimation} className="font-semibold text-4xl sm:text-5xl md:text-6xl text-center">
          Contact Me
        </motion.span>
        <span className="mt-3 rounded-md bg-[#efc071] h-1 w-full sm:w-1/3" />
      </div>

      {/* Details */}
      <div className="pt-10 sm:pt-20">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* Email */}
          <motion.span
            className="flex justify-start text-[#efc071] items-center bg-[#32353c] p-2 px-6 shadow-md min-w-[80%] sm:min-w-[40%] md:min-w-[20%] rounded-md"
            initial="hidden"
            animate="visible"
            variants={contactAnimation}
          >
            <Mail className="size-6 mr-4 text-white" />
            nikhilsarode2020@gmail.com
          </motion.span>

          {/* Phone */}
          <motion.span
            className="flex justify-start text-[#efc071] items-center bg-[#32353c] p-2 px-6 shadow-md min-w-[80%] sm:min-w-[40%] md:min-w-[20%] rounded-md"
            initial="hidden"
            animate="visible"
            variants={contactAnimation}
            style={{ transitionDelay: "0.1s" }} // Slight delay for each item
          >
            <Phone className="size-6 mr-4 text-white" />
            +91 8668729638
          </motion.span>

          {/* Location */}
          <motion.span
            className="flex justify-start text-[#efc071] items-center bg-[#32353c] p-2 px-6 shadow-md min-w-[80%] sm:min-w-[40%] md:min-w-[20%] rounded-md"
            initial="hidden"
            animate="visible"
            variants={contactAnimation}
            style={{ transitionDelay: "0.2s" }} // Slight delay for each item
          >
            <MapPin className="size-6 mr-4 text-white" />
            Pune, Maharashtra, India
          </motion.span>
        </div>
      </div>

      {/* Social Links */}
      <div className="pt-10 sm:pt-20 flex flex-col sm:flex-row justify-center items-center gap-6">
        <span className="mt-3 rounded-md bg-[#efc071] h-1 w-full sm:w-1/3" />
        <div className="flex justify-center gap-6">
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
        <span className="mt-3 rounded-md bg-[#efc071] h-1 w-full sm:w-1/3" />
      </div>
    </div>
  );
};

export default Contact;
