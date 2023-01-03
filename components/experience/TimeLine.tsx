import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { fadeIn, slideIn } from "../util/motion";
import styles from "./experience.module.scss";
interface Props {
  name: string;
  desc: string;
  link: string;
  iconBg: string;
  index: number;
}
const TimeLine: FC<Props> = ({ desc, iconBg, link, name, index }) => {
  return (
    <motion.section
      className={styles.timeline}
      variants={slideIn("left", "spring", index * 0.5, 0.75)}
    >
      <div className={styles.content}>
        <motion.div
          variants={fadeIn("left", "spring", index * 0.5, 0.75)}
          className={classNames("hover_me", iconBg, styles.badge)}
        >
          <i className="fas fa-briefcase" />
        </motion.div>
        <div className={styles.panel}>
          <h4 className={styles.title}>{name}</h4>
          <div className={styles.body}>
            <p>
              {desc}
              <Link target="_blank" href={link}>
                Read More
              </Link>
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TimeLine;
