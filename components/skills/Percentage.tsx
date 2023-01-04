import classNames from "classnames";
import { motion } from "framer-motion";
import { FC } from "react";
import { fadeIn } from "../util/motion";
import styles from "./progress.module.scss";
interface Props {
  percentage: number;
  skill: string;
  classes?: string;
  index: number;
}
const Percentage: FC<Props> = ({ percentage, skill, classes, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.1, 0.75)}
    className={classNames("flex justify-between px-8 py-2", classes)}
  >
    <p className=" w-[35%] text-xl font-black text-[#34bfff]">{skill}</p>
    <div className={classNames("mt-[5px]", styles.progress)}>
      <motion.div
        initial={{ width: `${0}%` }}
        animate={{ width: `${percentage}%` }}
        transition={{
          duration: index * 0.75,
          delay: index * 0.5,
          type: "spring",
          stiffness: 20,
        }}
        data-percentage={`${percentage}%`}
      >
        <span />
      </motion.div>
    </div>
  </motion.div>
);

export default Percentage;
