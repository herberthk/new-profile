import classNames from "classnames";
import { FC } from "react";
import styles from "./experience.module.scss";

interface Props {
  year: string;
  bgColor: string;
}
const Year: FC<Props> = ({ bgColor, year }) => {
  return (
    <div className={classNames("mx-auto", styles.year, bgColor)}>{year}</div>
  );
};

export default Year;
