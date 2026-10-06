import { motion } from "framer-motion";
import React from "react";
import { experiences } from "../constants";

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

const Experience = () => {
  return (
    <section id="experience" className="mb-12 mt-12">
      <motion.div
        whileInView={{ y: [-15, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <span style={{ fontSize: "28px" }}>💼</span>
          <h1 className="font-poppins font-semibold ss:text-[52px] text-[40px] text-gradient ss:leading-[70px] leading-[60px]">
            Experience
          </h1>
        </div>
        <p className="font-poppins text-[14px] ml-1" style={{ color: "rgba(128, 240, 255, 0.7)" }}>
          Where I've applied my skills
        </p>
      </motion.div>

      <div className="flex flex-col gap-8 w-full">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} index={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
