"use client";
import Image from "next/image";
import styles from "./banner.module.scss";
import classNames from "classnames";
import { bioInfo } from "../../mockdata/data";
import Pointer from "../about/Pointer";
import { TypingTextHeader } from "../others/TypingText";
import { motion } from "framer-motion";
import { slideIn, fadeIn } from "../util/motion";
const Banner = () => {
  return (
    <motion.div
      // variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      // viewport={{ once: false, amount: 0.17 }}
      className={classNames(
        "mt-12 mb-7 rounded-md p-6 sm:p-10",
        styles.banner,
        styles.shadow
      )}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-9">
        <div className="w-full">
          <Pointer text="Hi I AM!" />
          <TypingTextHeader
            text="FULL STACK SOFTWARE ENGINEER"
            classes="sm:text-[1.2rem] text-[1rem]"
          />
          <ul className="mt-5 flex flex-col space-y-4 border-t-[1px] py-5 text-white">
            {Object.entries(bioInfo).map(([key, value], i) => (
              <motion.li
                key={key}
                variants={fadeIn("left", "spring", i * 0.5, 0.75)}
              >
                <ul className="flex">
                  <li className="w-[32%] text-lg uppercase sm:w-[20%]">
                    <b>{key}</b>
                  </li>
                  <li
                    className="text-lg hover:text-orange-300"
                    dangerouslySetInnerHTML={{ __html: value }}
                  />
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          className="relative ml-auto h-[330px] w-[100%] rounded-2xl border-[5px] border-orange-400 sm:h-[491px] sm:w-[369px]"
          variants={slideIn("right", "spring", 1, 2)}
        >
          <Image
            src="/images/pic.jpg"
            alt="Kavuma Herbert"
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
