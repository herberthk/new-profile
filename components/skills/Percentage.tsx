import classNames from "classnames";
import { motion } from "framer-motion";
import { FC } from "react";
import { PercentageProps } from "../../interface";
import { fadeIn } from "../util/motion";
import styles from "./progress.module.scss";

const Percentage: FC<PercentageProps> = ({
  percentage,
  skill,
  classes,
  index,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.1, 0.75)}
    className={classNames("flex justify-between py-2 px-4 sm:px-8", classes)}
  >
    <p className="w-[60%] text-[0.9rem] font-black text-[#34bfff] sm:w-[35%] sm:text-xl">
      {skill}
    </p>
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
