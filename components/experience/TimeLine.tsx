import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";
import styles from "./experience.module.scss";
interface Props {
  name: string;
  desc: string;
  link: string;
  iconBg: string;
}
const TimeLine: FC<Props> = ({ desc, iconBg, link, name }) => {
  return (
    <section className={styles.timeline}>
      <div className={styles.content}>
        <div className={classNames(iconBg, styles.badge)}>
          <i className="fas fa-briefcase" />
        </div>
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
    </section>
  );
};

export default TimeLine;
