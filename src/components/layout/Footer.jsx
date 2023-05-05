import { AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-white border-t border-primary ">
      <div className="max-w-[1500px] mx-auto">
        <div className=" px-[160px] p-5 shadow-md  md:p-5 space-y-4">
          <div className="flex  items-center justify-between">
            <h3 className="font-bold text-3xl md:text-lg">
              Daily-Dose <span className="text-primary">News</span>
            </h3>
            <div className="flex items-center gap-4 ">
              <AiOutlineLinkedin className="w-8 h-8 hover:text-primary md:w-6" />
              <BsInstagram className="w-8 h-8 hover:text-primary md:w-6" />
              <IoLogoYoutube className="w-8 h-8 hover:text-primary md:w-6" />
              <BsGithub className="w-8 h-8 hover:text-primary md:w-6" />
            </div>
          </div>
          <p className="text-center text-base font-bold md:text-sm">
            ©2023Daily-Dose News.All rights reserved|designed by Clever
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
