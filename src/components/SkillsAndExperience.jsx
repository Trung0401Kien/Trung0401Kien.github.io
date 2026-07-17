import { motion } from "framer-motion";
import React from "react";
import { experiences, skills } from "../constants";
import { layout } from "../style";

export const SkillIcon = ({ icon, name }) => {
  return (
    <div className="skill-icon-wrapper flex flex-col items-center justify-start h-full">
      <div className="flex items-center justify-center h-[40px]">
        <span className="text-white text-[32px]" style={{ filter: "drop-shadow(0 0 8px rgba(0, 240, 255, 0.6))" }}>
          {React.createElement(icon)}
        </span>
      </div>
      <p className="font-poppins text-[11px] mt-2 text-center font-medium leading-[14px]"
         style={{ color: "#80F0FF", letterSpacing: "0.3px" }}>
        {name}
      </p>
    </div>
  );
};

const SkillCard = (props) => {
  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full mb-8 pr-4"
      style={{
        background: "linear-gradient(135deg, rgba(0, 20, 40, 0.6) 0%, rgba(0, 40, 80, 0.4) 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(0, 240, 255, 0.25)",
        borderRadius: "16px",
        padding: "20px 24px",
        boxShadow: "0 4px 30px rgba(0, 240, 255, 0.1), inset 0 1px 0 rgba(255,255,255,0.05)"
      }}
    >
      {/* Category label */}
      <div className="flex items-center gap-3 mb-5">
        <div style={{
          width: "4px",
          height: "24px",
          background: "linear-gradient(180deg, #00F0FF, #00A0FF)",
          borderRadius: "2px",
          flexShrink: 0
        }} />
        <h4 className="font-poppins font-semibold text-[18px] text-gradient leading-[28px]">
          {props.title}
        </h4>
      </div>

      <div className="grid grid-cols-3 gap-y-6 gap-x-2">
        {props.items.map((item, index) => (
          <SkillIcon key={item.id} index={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

const Content = ({ text, link }) => {
  return (
    <div>
      <p className="font-poppins font-normal text-[14px] mt-3 leading-[22px]"
         style={{ color: "#80F0FF" }}>
        {text}{" "}
        {link ? (
          <a href={link} target="_blank" rel="noreferrer"
             style={{ color: "#00F0FF", textDecoration: "underline", textDecorationColor: "rgba(0,240,255,0.4)" }}>
            ↗
          </a>
        ) : ""}
      </p>
    </div>
  );
};

const ExperienceCard = (props) => {
  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full mb-6"
      style={{
        background: "linear-gradient(135deg, rgba(0, 20, 40, 0.6) 0%, rgba(0, 40, 80, 0.4) 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(0, 240, 255, 0.25)",
        borderRadius: "16px",
        padding: "24px",
        boxShadow: "0 4px 30px rgba(0, 240, 255, 0.1), inset 0 1px 0 rgba(255,255,255,0.05)"
      }}
    >
      <div className="flex flex-row items-center mb-6">
        <div style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          border: "2px solid rgba(0, 240, 255, 0.5)",
          overflow: "hidden",
          boxShadow: "0 0 15px rgba(0, 240, 255, 0.3)",
          flexShrink: 0
        }}>
          <img
            src={props.logo}
            alt={props.organisation}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="ml-3">
          <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[30px]">
            {props.organisation}
          </h4>
          <a href={props.link} target="_blank" rel="noreferrer"
             className="text-[12px] font-poppins"
             style={{ color: "rgba(0, 240, 255, 0.7)", textDecoration: "none" }}>
            {props.link}
          </a>
        </div>
      </div>

      <ol className="relative ml-4" style={{ borderLeft: "2px solid rgba(0, 240, 255, 0.3)" }}>
        {props.positions.map((position, index) => (
          <li
            key={index}
            className={`${index === props.positions.length - 1 ? "mb-0" : "mb-6"} ml-5`}
          >
            <div
              className="absolute w-3 h-3 rounded-full -left-[7px] mt-1.5"
              style={{
                background: "linear-gradient(135deg, #00F0FF, #00A0FF)",
                border: "2px solid #0f0f23",
                boxShadow: "0 0 8px rgba(0, 240, 255, 0.6)"
              }}
            />
            <h3 className="text-[16px] font-semibold font-poppins text-white">
              {position.title}
            </h3>
            <time className="mb-2 block text-[12px] font-normal font-poppins"
                  style={{ color: "#00F0FF" }}>
              📅 {position.duration}
            </time>
            {position.content.map((info, idx) => (
              <Content key={idx} index={idx} {...info} />
            ))}
          </li>
        ))}
      </ol>
    </motion.div>
  );
};

const SkillsAndExperience = () => {
  return (
    <section id="skills" className="mb-12">
      {/* Section Header */}
      <motion.div
        whileInView={{ y: [-15, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <span style={{ fontSize: "28px" }}>⚡</span>
          <h1 className="font-poppins font-semibold ss:text-[52px] text-[40px] text-gradient ss:leading-[70px] leading-[60px]">
            Skills & Experience
          </h1>
        </div>
        <p className="font-poppins text-[14px] ml-1" style={{ color: "rgba(128, 240, 255, 0.7)" }}>
          Technologies I work with and where I've applied them
        </p>
      </motion.div>

      <div className={`${layout.section} md:gap-14 gap-8`}>
        {/* Skills Column */}
        <motion.div className={`ml-2 mb-6 ${layout.sectionInfo}`}>
          {skills.map((skill, index) => (
            <SkillCard key={index} index={index} {...skill} />
          ))}
        </motion.div>

        {/* Experience Column */}
        <motion.div className="flex flex-1 items-start justify-start flex-col">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} index={index} {...exp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsAndExperience;
