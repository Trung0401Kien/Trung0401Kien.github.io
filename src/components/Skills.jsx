import { motion } from "framer-motion";
import React from "react";
import { skills } from "../constants";

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

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-6 gap-x-2">
        {props.items.map((item, index) => (
          <SkillIcon key={item.id} index={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="mb-12">
      <motion.div
        whileInView={{ y: [-15, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <span style={{ fontSize: "28px" }}>⚡</span>
          <h1 className="font-poppins font-semibold ss:text-[52px] text-[40px] text-gradient ss:leading-[70px] leading-[60px]">
            Skills
          </h1>
        </div>
        <p className="font-poppins text-[14px] ml-1" style={{ color: "rgba(128, 240, 255, 0.7)" }}>
          Technologies I work with
        </p>
      </motion.div>

      <div className="flex flex-col gap-8 w-full">
        {skills.map((skill, index) => (
          <SkillCard key={index} index={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
