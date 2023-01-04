import classNames from "classnames";
import { motion } from "framer-motion";
import { FC } from "react";
import { slideIn } from "../util/motion";
import styles from "./experience.module.scss";

interface Props {
  year: string;
  bgColor: string;
  index: number;
}
const Year: FC<Props> = ({ bgColor, year, index }) => {
  return (
    <motion.div
      variants={slideIn(
        `${index % 2 === 0 ? "up" : "down"}`,
        "spring",
        index * 0.5,
        0.75
      )}
      className={classNames("mx-auto", styles.year, bgColor)}
    >
      {year}
    </motion.div>
  );
};

export default Year;
