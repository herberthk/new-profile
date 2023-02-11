import { experience } from "../../mockdata/experience";
import Pointer from "../about/Pointer";
import Boarder from "../skills/Boarder";
import TimeLine from "./TimeLine";
import Year from "./Year";
import styles from "./experience.module.scss";
import { TypingTextHeader } from "../others/TypingText";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      // variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      // viewport={{ once: false, amount: 0.17 }}
      className="container mx-auto py-[2rem] sm:py-[5rem]"
      id="section4"
    >
      <div className="mx-auto text-center">
        <Pointer text="EXPERIENCE" />
        <TypingTextHeader text="MY Experience" color="text-black" />
        <Boarder classes="bg-[#8c8989]" />
      </div>
      <div className="mt-[1rem] sm:mt-[3rem]">
        {experience.map(({ desc, link, name, year }, i) => (
          <div key={i} className="grid grid-cols-1 sm:grid-cols-2">
            <Year
              year={year}
              bgColor={(i + 1) % 2 === 0 ? styles.orange : styles.green}
              index={i}
            />
            <TimeLine
              desc={desc}
              iconBg={(i + 1) % 2 === 0 ? styles.red : styles.blue}
              link={link}
              name={name}
              index={i}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
