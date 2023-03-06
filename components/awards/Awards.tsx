import Link from "next/link";
import Image from "next/image";
import { awards } from "../../mockdata/awards";
import Pointer from "../about/Pointer";
import Boarder from "../skills/Boarder";
import styles from "./awards.module.scss";
import classNames from "classnames";
import { TypingTextHeader } from "../others/TypingText";
import { motion } from "framer-motion";
import { fadeIn } from "../util/motion";

const Awards = () => {
  return (
    <motion.div
      className="bg-[#30336b] py-8 sm:py-[5rem]"
      id="section5"
      // variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      // viewport={{ once: false, amount: 0.17 }}
    >
      <div className="container mx-auto ">
        <div className="mx-auto text-center">
          <Pointer text="Awards" />
          <TypingTextHeader text="Certification and awards" />
          <Boarder classes="bg-[#fff]" />
        </div>
        <ul className="mt-11 grid grid-cols-1 gap-9 sm:grid-cols-2">
          {awards.map(({ from, title, url, id }, i) => {
            return (
              <motion.li
                whileHover={{
                  scale: 1.05,
                  transition: { easings: ["easeIn", "easeOut"] },
                }}
                variants={fadeIn(
                  "right",
                  // `${i % 2 === 0 ? "up" : "down"}`,
                  "spring",
                  i * 0.5,
                  0.75
                )}
                className={classNames(
                  "bg-gradient-to-r from-[#30336b] to-[#5352ed] py-4 pl-4 shadow-md transition duration-500 ease-in-out",
                  styles.border
                )}
                key={id}
              >
                <ul className="flex">
                  <li className="relative mr-7 w-1/4">
                    <Image
                      src="/images/award.webp"
                      alt="Certificate"
                      width={100}
                      height={100}
                    />
                  </li>
                  <li className="mx-auto w-3/4">
                    <p className="mb-3 px-5 text-2xl font-bold text-[#25CCF7]">
                      Provided by: {from}
                    </p>
                    <p className="px-5 text-2xl text-white">{title}</p>

                    <Link
                      className="px-5 text-base italic text-white hover:underline"
                      href={url}
                      title={title}
                      target={"_blank"}
                    >
                      Yo can view the certificate here
                    </Link>
                  </li>
                </ul>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default Awards;
