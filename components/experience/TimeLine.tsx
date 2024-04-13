import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { TimeLineProps } from "../../interface";
import { fadeIn, slideIn } from "../util/motion";
import styles from "./experience.module.scss";

const TimeLine: FC<TimeLineProps> = ({
  desc,
  iconBg,
  name,
  index,
  projects,
  techStack,
}) => {
  return (
    <motion.section
      className={styles.timeline}
      variants={slideIn(
        `${index % 2 === 0 ? "left" : "right"}`,
        "spring",
        index * 0.5,
        0.75
      )}
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
              {desc} Some of the projects I contributed to include the following
            </p>
            <p className="break-all leading-normal">
              {projects.map(({ project, url }, i) => (
                <Link
                  className={classNames(
                    "text-[1rem] text-[#00a78e] hover:underline",
                    {
                      "ml-2": i !== 0,
                    }
                  )}
                  key={i}
                  href={url}
                >
                  {project}
                </Link>
              ))}
            </p>
            And the tech-stack we used includes
            <p className="break-all leading-normal">
              {techStack.map((t, i) => (
                <span
                  title={t}
                  className={classNames("bg-[#00a78e] text-white", styles.tag, {
                    "ml-1": i !== 0,
                  })}
                  key={i}
                >
                  {t}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TimeLine;
