import Node from "../../assets/node.png";
import AWS from "../../assets/aws.png";
import Django from "../../assets/django.png";
import Docker from "../../assets/docker.png";
import MySql from "../../assets/mysql.png";
import Postgres from "../../assets/postgres.png";
import ReactNative from "../../assets/react-native.png";
import ReactLogo from "../../assets/react.png";
import Tailwind from "../../assets/tailwind.png";

const skills = [
  {
    id: 1,
    title: "Node Js",
    image: Node,
  },
  {
    id: 2,
    title: "AWS",
    image: AWS,
  },
  {
    id: 3,
    title: "DJango",
    image: Django,
  },
  {
    id: 4,
    title: "Docker",
    image: Docker,
  },
  {
    id: 5,
    title: "MySql",
    image: MySql,
  },
  {
    id: 5,
    title: "Tailwind",
    image: Tailwind,
  },
  {
    id: 5,
    title: "Postgres",
    image: Postgres,
  },
  {
    id: 5,
    title: "React Native",
    image: ReactNative,
  },
  {
    id: 5,
    title: "React Js",
    image: ReactLogo,
  },
];

const Skills = () => {
  return (
    <div className="pt-10 flex flex-col gap-10 sm:gap-16 lg:gap-20">
      <span className="font-semibold text-4xl sm:text-5xl md:text-6xl text-center">
        My Skills
      </span>
      <div className="w-full flex justify-center sm:justify-evenly p-2 items-center flex-wrap gap-6 relative">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="w-full sm:w-[45%] md:w-[30%] lg:w-1/5 mb-5 shadow-md mx-3 rounded-md bg-[#3b3e3e] p-5 flex flex-col justify-between gap-5 cursor-pointer transition-colors ease-in hover:bg-[#efc071]"
          >
            <div className="h-2/3 flex justify-center items-center">
              <img src={skill.image} className="object-cover w-16 sm:w-20" />
            </div>
            <span className="h-1/3 text-slate-200 text-lg sm:text-xl flex items-end justify-center">
              {skill.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
