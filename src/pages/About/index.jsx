import Skills from "./Skills";

const About = () => {
  return (
    <div
  id="about"
  className="relative w-full min-h-[100vh] py-10 text-slate-200 px-6 sm:px-10 md:px-20 lg:px-40 pt-10 sm:pt-15 lg:pt-20"
>
  {/* Header */}
  <div className="font-semibold text-4xl sm:text-5xl md:text-6xl">About</div>

  {/* Description */}
  <div className="pt-10 sm:pt-15 lg:pt-20 flex flex-col sm:flex-row justify-start items-start gap-6 sm:gap-10">
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
  </div>

  <Skills/>
</div>

  );
};

export default About;
