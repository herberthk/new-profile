import classNames from "classnames";
import { FC } from "react";
import { PointerProps } from "../../interface";
import styles from "./pointer.module.scss";

const Pointer: FC<PointerProps> = ({ text, otherClasses }) => {
  return <p className={classNames(styles.pointer, otherClasses)}>{text}</p>;
};

export default Pointer;
