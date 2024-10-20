import AMS from "../../assets/AMS.jpeg";
import GetReferral from "../../assets/get-referal.jpeg";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    image: AMS,
    title: "Alarm Management System",
    description:
      "A single-page alarm management system developed using React, Node, and Postgres, designed for real-time monitoring and efficient alarm handling.",
  },
  {
    id: 2,
    image: GetReferral,
    title: "Get Your Referral",
    description:
      "A single-page referral management system developed using React, Node, and MongoDB, designed to help users easily get referrals for their next job opportunities.",
  },
];

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

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="pt-10 min-h-[100vh] flex flex-col gap-10 sm:gap-16 lg:gap-20 text-slate-200"
    >
      <motion.span initial="hidden"
        animate="visible"
        variants={headerAnimation} className="font-semibold text-4xl sm:text-5xl md:text-6xl text-center">
        Portfolio
      </motion.span>

      <div className="w-full flex justify-center sm:justify-evenly p-2 items-center flex-wrap gap-6 relative">
        {projects.map((item) => (
          <motion.div
          initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            key={item.id}
            className="relative transition-shadow ease-in-out duration-150 projects w-full sm:w-[45%] md:w-[30%] lg:w-1/5 mb-5 shadow-md mx-3 rounded-md bg-[#3b3e3e] flex flex-col justify-between gap-5 cursor-pointer"
          >
            <div className="flex justify-center items-center">
              <img
                src={item.image}
                className="w-full object-cover h-40 sm:h-60 md:h-80"
              />
            </div>
            <div className="project-info w-full text-center text-slate-200 p-2">
              <span className="text-lg sm:text-xl font-semibold text-[#efc071]">
                {item.title}
              </span>
              <p className="text-sm sm:text-base">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
