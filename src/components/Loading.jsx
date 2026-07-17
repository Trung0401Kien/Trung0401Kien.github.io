import { motion } from "framer-motion";
import { parthmittal } from "../assets";
import styles from "../style";

const Loading = ({isLoading}) => {
    return(
        <motion.div
            id="loading"
            className={`w-[100vw] h-[100vh] flex "${styles.flexCenter}`}
            initial={{ scale: 1.0, opacity: 0.25 }}
            animate={{ scale: 2.0, opacity: 0.75 }}
            transition={{
                yoyo: Infinity,
                duration: 1.0,
                ease: "easeIn",
            }}
          >
              <span className="font-poppins font-bold text-[36px] tracking-wider text-white">
                <span className="text-[#00F0FF]">[</span> TRUNG KIEN <span className="text-[#00F0FF]">]</span>
              </span>
          </motion.div>
        )
   
};

export default Loading;
