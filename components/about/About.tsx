import { description } from "../../mockdata/data";
import CustomButton from "../button/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../util/motion";

const About = () => {
  return (
    <motion.div
      className="container mx-auto sm:h-[85vh] sm:pt-[1rem]"
      id="section2"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      // viewport={{ once: false, amount: 0.17 }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-7">
        <motion.div
          className="relative mx-auto w-[100%]"
          variants={slideIn("right", "spring", 1, 2)}
        >
          <Image
            src="/images/coding.jpg"
            alt="Kavuma Herbert"
            style={{ objectFit: "cover" }}
            fill
            className="hover_me rounded-xl"
          />
        </motion.div>
        <div className="hover_me mx-auto p-4">
          <motion.h1
            variants={fadeIn("down", "tween", 0.2, 1)}
            className="mb-4 text-3xl font-bold uppercase tracking-wider"
          >
            Basick Info!
          </motion.h1>
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="pb-4 text-xl leading-9"
          >
            {description}
          </motion.p>
          <motion.div
            variants={slideIn("left", "tween", 1, 1)}
            className="mt-4 inline-flex"
          >
            <CustomButton
              text="My work"
              backgroundColor="text-white"
              textColor="text-orange-400"
              otherClasses="hover_me hover:bg-orange-400 hover:text-white"
              onClick={() =>
                document
                  .querySelector("#section6")!
                  .scrollIntoView({ behavior: "smooth" })
              }
            />
            <CustomButton
              text="Hire me"
              backgroundColor="text-white"
              textColor="text-orange-400"
              otherClasses="hover_me ml-4 hover:bg-orange-400 hover:text-white"
              onClick={() =>
                document
                  .querySelector("#section7")!
                  .scrollIntoView({ behavior: "smooth" })
              }
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
