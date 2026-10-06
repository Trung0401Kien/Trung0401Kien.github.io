import React, { useState } from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const LetsConnect = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
        onClick={() => setIsOpen(true)}
      >
        <div
          className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
        >
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23px]">
              <span className="text-gradient">My</span>
            </p>
            <img src={arrowUp} alt="arrowUp" className="w-[23px] h-[23px] " />
          </div>
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23px]">
              <span className="text-gradient">CV</span>
            </p>
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl h-[85vh] bg-primary rounded-xl p-2 border border-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.3)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-4 -right-4 w-10 h-10 bg-blue-gradient rounded-full flex justify-center items-center text-white font-bold text-xl z-50 shadow-lg hover:scale-110 transition-transform cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <div className="w-full h-full rounded-lg overflow-hidden bg-white">
              <iframe 
                src="/CV/Nguyen_Do_Trung_Kien_CV.pdf" 
                className="w-full h-full border-none"
                title="Trung Kien CV"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LetsConnect;
