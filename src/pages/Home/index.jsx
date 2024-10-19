import { Github, Linkedin, Twitter } from "lucide-react";

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

const Home = () => {
  return (
    <div className="relative w-full h-[100vh] px-6 sm:px-10 md:px-20 py-10 text-slate-200">
      {/* Navbar */}
      <div className="flex justify-between items-center lg:p-5 lg:pb-20">
        <span className="font-semibold text-xl sm:text-2xl">LOGO</span>
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-10">
          {links.map((item) => (
            <a key={item.id} href={item.link} className="hover:text-[#efc071]">
              <span className="font-semibold">{item.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col gap-5 h-auto px-4 sm:px-10 md:px-20 lg:px-40 pt-10 sm:pt-15 md:pt-20 pb-10 sm:pb-12 md:pb-16">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="uppercase text-2xl sm:text-3xl md:text-4xl">
            I&apos;m
          </span>
          <span className="font-semibold text-[#efc071]">
            &nbsp;Nikhil Sarode
          </span>
        </div>
        <span className="w-full sm:w-[45ch] md:w-[50ch] text-base sm:text-lg">
          Full-stack developer skilled in building user-centric apps with React,
          Node.js, and Tailwind CSS.
        </span>
        <a href="#contact">
          <button className="font-semibold border-2 border-[#efc071] w-[40%] sm:w-[30%] md:w-[15%] lg:w-[10%] rounded-md p-2 hover:bg-[#efc071] hover:border-slate-950 text-[#efc071] hover:text-slate-950">
            Contact Me
          </button>
        </a>
      </div>

      {/* Social Links */}
      <div className="relative flex justify-end items-end flex-col gap-6 sm:gap-8 md:gap-10">
        <span className="absolute top-[-150%] -translate-x-3 h-40 rounded-md bg-[#efc071] w-1" />
        <span className="cursor-pointer">
          <Linkedin className="size-6" />
        </span>
        <span className="cursor-pointer">
          <Github className="size-6" />
        </span>
        <span className="cursor-pointer">
          <Twitter className="size-6" />
        </span>
      </div>
    </div>
  );
};

export default Home;
