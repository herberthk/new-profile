import classNames from "classnames";
import { FC } from "react";
import styles from "./border.module.scss";
interface Props {
  classes?: string;
}
const Boarder: FC<Props> = ({ classes = "bg-white" }) => (
  <span className={classNames("w-[35%] sm:w-[18%]", styles.border, classes)} />
);

export default Boarder;
