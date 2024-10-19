import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative w-full py-10 text-slate-200 bg-[#3a3e40]"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <span className="mt-3 rounded-md bg-[#efc071] h-1 w-full sm:w-1/3" />
        <span className="font-semibold text-4xl sm:text-5xl md:text-6xl text-center">
          Contact Me
        </span>
        <span className="mt-3 rounded-md bg-[#efc071] h-1 w-full sm:w-1/3" />
      </div>

      {/* Details */}
      <div className="pt-10 sm:pt-20">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <span className="flex justify-start text-[#efc071] items-center bg-[#32353c] p-2 px-6 shadow-md min-w-[80%] sm:min-w-[40%] md:min-w-[20%] rounded-md">
            <Mail className="size-6 mr-4 text-white" />
            nikhilsarode2020@gmail.com
          </span>
          <span className="flex justify-start text-[#efc071] items-center bg-[#32353c] p-2 px-6 shadow-md min-w-[80%] sm:min-w-[40%] md:min-w-[20%] rounded-md">
            <Phone className="size-6 mr-4 text-white" />
            +91 8668729638
          </span>
          <span className="flex justify-start text-[#efc071] items-center bg-[#32353c] p-2 px-6 shadow-md min-w-[80%] sm:min-w-[40%] md:min-w-[20%] rounded-md">
            <MapPin className="size-6 mr-4 text-white" />
            Pune, Maharashtra, India
          </span>
        </div>
      </div>

      {/* Social Links */}
      <div className="pt-10 sm:pt-20 flex flex-col sm:flex-row justify-center items-center gap-6">
        <span className="mt-3 rounded-md bg-[#efc071] h-1 w-full sm:w-1/3" />
        <div className="flex justify-center gap-6">
          <span className="cursor-pointer">
            <Linkedin className="size-8" />
          </span>
          <span className="cursor-pointer">
            <Github className="size-8" />
          </span>
          <span className="cursor-pointer">
            <Twitter className="size-8" />
          </span>
        </div>
        <span className="mt-3 rounded-md bg-[#efc071] h-1 w-full sm:w-1/3" />
      </div>
    </div>
  );
};

export default Contact;
