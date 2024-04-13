import { projects } from "../../mockdata/projects";
import Pointer from "../about/Pointer";
import Boarder from "../skills/Boarder";
import Image from "next/image";
import styles from "./projects.module.scss";
import classNames from "classnames";
import { TypingTextHeader } from "../others/TypingText";
import { motion } from "framer-motion";
import { fadeIn } from "../util/motion";
import CustomButton from "../button/Button";
import Link from "next/link";
import { CodeIcon } from "../icons";
import { randomId } from "../util/helpers";

const Projects = () => {
  return (
    <motion.div
      className="container mx-auto py-8 sm:py-[5rem]"
      id="section6"
      // variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      // viewport={{ once: false, amount: 0.17 }}
    >
      <div className="mx-auto text-center">
        <Pointer text="Projects" />
        <TypingTextHeader text="My Recent projects" color="text-black" />
        <Boarder classes="bg-[#8c8989]" />
      </div>
      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-7">
        {projects.map(
          ({ desc, imageUrl, name, url, githubUrl, imageContain }, i) => (
            <motion.div
              variants={fadeIn(
                `${i % 2 === 0 ? "up" : "down"}`,
                "spring",
                i * 0.5,
                0.75
              )}
              // variants={planetVariants("right")}
              key={randomId()}
              className={classNames(
                "hover_me relative h-96 transition duration-500 ease-in-out hover:scale-105",
                styles.main
              )}
            >
              <Image
                src={imageUrl}
                alt={name}
                fill
                style={{ objectFit: imageContain ? "contain" : undefined }}
              />
              <div className={styles.overlay}>
                <p className="mb-4 text-center text-[1rem] font-bold uppercase text-orange-400 sm:text-lg">
                  {name}
                </p>
                <p className="text-white">{desc}</p>
                <div className="flex">
                  {githubUrl ? (
                    <CustomButton
                      text="View code"
                      backgroundColor="text-white"
                      otherClasses="border border-white mt-4 hover:bg-orange-700"
                      paddingX="px-[1rem]"
                      paddingY="py-[0.3rem]"
                      fontSize="text-[0.9rem]"
                      as={Link}
                      href={githubUrl}
                      target={"_blank"}
                      prefixIcon={<CodeIcon />}
                      uppercase={true}
                    />
                  ) : (
                    <CustomButton
                      text="Private"
                      backgroundColor="text-white"
                      otherClasses="border border-white mt-4 hover:bg-orange-700"
                      paddingX="px-[1rem]"
                      paddingY="py-[0.3rem]"
                      fontSize="text-[0.9rem]"
                      prefixIcon={<CodeIcon />}
                      uppercase={true}
                    />
                  )}

                  {url && (
                    <CustomButton
                      text="Live demo"
                      backgroundColor="text-white"
                      otherClasses="border border-white mt-4 hover:bg-orange-700 ml-5"
                      paddingX="px-[1rem]"
                      paddingY="py-[0.3rem]"
                      fontSize="text-[0.9rem]"
                      as={Link}
                      href={url}
                      target={"_blank"}
                      uppercase={true}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
