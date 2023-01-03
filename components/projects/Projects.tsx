import { projects } from "../../mockdata/projects";
import Pointer from "../about/Pointer";
import Boarder from "../skills/Boarder";
import Image from "next/image";
import styles from "./projects.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { TypingTextHeader } from "../others/TypingText";
import { motion } from "framer-motion";
import { fadeIn } from "../util/motion";

const Projects = () => {
  return (
    <motion.div
      className="container mx-auto py-[5rem]"
      id="section6"
      // variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="mx-auto text-center">
        <Pointer text="Projects" />
        <TypingTextHeader text="My Recent projects" color="" />
        <Boarder />
      </div>
      <div className="mt-7 grid grid-cols-2 gap-6">
        {projects.map(({ desc, id, imageUrl, name, url }, i) => (
          <motion.div
            variants={fadeIn(
              `${i % 2 === 0 ? "up" : "down"}`,
              "spring",
              i * 0.5,
              0.75
            )}
            // variants={planetVariants("right")}
            key={id}
            className={classNames(
              "hover_me relative h-96 transition duration-500 ease-in-out hover:scale-105",
              styles.main
            )}
          >
            <Image
              src={imageUrl}
              alt={name}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className={styles.overlay}>
              <p className="mb-4 text-center text-2xl font-bold uppercase text-orange-400">
                {name}
              </p>
              <p className="text-2xl text-white">{desc}</p>
              <Link
                className="mt-3 text-lg font-bold text-orange-400 hover:underline"
                href={url}
                target={"_blank"}
              >
                <i>{name} is available here</i>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
