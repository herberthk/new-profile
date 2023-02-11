import classNames from "classnames";
import { FC } from "react";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../util/motion";

interface Props {
  text: string;
  color?: string;
  classes?: string;
}
export const TypingTextHeader: FC<Props> = ({
  color = "text-white",
  text,
  classes = "sm:text-3xl text-[1rem] mt-[1rem]",
}) => {
  return (
    <motion.h1
      variants={textContainer}
      className={classNames(
        "mt-3 font-extrabold uppercase tracking-[0.08rem] sm:tracking-[0.4rem]",
        color,
        classes
      )}
    >
      {Array.from(text).map((letter, index) => (
        <motion.span variants={textVariant2()} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export const TypingText: FC<Props> = ({
  color = "text-white",
  text,
  classes = "text-3xl",
}) => {
  return (
    <motion.p
      variants={textContainer}
      className={classNames("pb-4 text-xl leading-9", color, classes)}
    >
      {Array.from(text).map((letter, index) => (
        <motion.span variants={textVariant2(0.5)} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};
