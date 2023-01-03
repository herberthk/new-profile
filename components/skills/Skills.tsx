import classNames from "classnames";
import { motion } from "framer-motion";
import { skills } from "../../mockdata/skills";
import Pointer from "../about/Pointer";
import { TypingTextHeader } from "../others/TypingText";
import Boarder from "./Boarder";
import Percentage from "./Percentage";

const Skills = () => {
  return (
    <motion.div
      // variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="bg-gradient-to-r from-[#30336b] to-[#5352ed] py-[5rem]"
      id="section3"
    >
      <div className="container mx-auto">
        <div className="mx-auto text-center">
          <Pointer text="What I Do" />
          <TypingTextHeader text="MY SKILLS" />
          <Boarder classes="bg-[#fff]" />
        </div>
        <div className="mx-auto mt-11 w-[70%] border border-[#34bfff] py-8">
          {skills.map(({ percentage, skill }, i) => (
            <Percentage
              index={i}
              key={i}
              percentage={percentage}
              skill={skill}
              classes={classNames(
                i !== 0 ? "mt-5" : "",
                i % 2 !== 0 ? "bg-[#34bfff0d]" : ""
              )}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
