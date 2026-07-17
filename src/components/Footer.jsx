import React from "react";
import Button from "./Button";
import { socialMedia, aboutMe, contactInfo } from "../constants";
import { kien } from "../assets";
import { layout } from "../style";
import { resumeLink, repoLink } from "../constants";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => (
  <footer id="contactMe" className="bg-gray-900 sm:px-16 px-6">
    <div
      className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4 `}
    >
      <div className={` ${layout.sectionInfo}`}>
        <h2 className="text-xl font-bold text-gray-800 font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
          {aboutMe.name}
        </h2>
        <p
          className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5`}
        >
        {aboutMe.tagLine}
        </p>

        <div className="font-poppins font-normal text-dimWhite text-[15px] leading-[28px] mt-6">
          <p>📍 Location: {contactInfo.location}</p>
          <p>📧 Email: {contactInfo.email}</p>
          <p>📞 Phone: {contactInfo.phone}</p>
          <p>🎂 Date Of Birth: {contactInfo.dob}</p>
        </div>
        <div className="flex flex-row mt-4">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              key={social.id}
              index={index}
              className="text-white mr-5 text-[25px] hover:text-cyan-200"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>

        <div className="mt-8">
          <a href={repoLink} target="_blank">
            <Button
              styles="inline-flex items-center justify-center"
              text="Star on GitHub"
              icon={AiFillGithub}
            />
          </a>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end items-center md:items-end">
        <img
          src={kien}
          alt="Trung Kien"
          className="w-[200px] h-[200px] relative z-[5] rounded-full glow-border"
          style={{ border: "2px solid rgba(0, 240, 255, 0.6)" }}
        />
      </div>
    </div>
    <div className="text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm pb-4">
      <p>
        Made with 💜 by <span style={{ color: "#00F0FF" }}>Trung Kien</span>
      </p>
    </div>
  </footer>
);

export default Footer;
