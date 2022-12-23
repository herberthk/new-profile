import classNames from "classnames";
import { FC } from "react";
import styles from "./pointer.module.scss";

interface Props {
  text: string;
  otherClasses?: string;
}
const Pointer: FC<Props> = ({ text, otherClasses }) => {
  return <p className={classNames(styles.pointer, otherClasses)}>{text}</p>;
};

export default Pointer;
