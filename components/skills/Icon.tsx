import React, { FC } from "react";
import styles from "./icon.module.scss";
interface Props {
  children: React.ReactNode;
}
const Icon: FC<Props> = ({ children }) => (
  <div className={styles.icon}>{children}</div>
);

export default Icon;
