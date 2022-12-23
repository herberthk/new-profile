import classNames from "classnames";
import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Text value of the button
   */
  text: string;
  /**
   *  Custom text color of the button default `white`
   */
  textColor?: string;
  /**
   *  Whether the button is rounded default `true`
   */
  rounded?: boolean;
  /**
   * background color of button `required`
   */
  backgroundColor: string;
  /**
   * whether text is uppercase default `false`
   */
  uppercase?: boolean;
  /**
   * Other custom classes
   */
  otherClasses?: string;
  /**
   * Icon on the left of the button
   */
  prefixIcon?: React.ReactNode;
  /**
   * Icon on the right of the button
   */
  suffixIcon?: React.ReactNode;
  /**
   * Styles for padding left and right
   */
  paddingX?: string;
  /**
   * Styles for padding top and bottom
   */
  paddingY?: string;

  fontSize?: string;
}
export const Button: FC<ButtonProps> = ({
  backgroundColor,
  textColor = "text-white",
  uppercase = false,
  rounded = true,
  text,
  otherClasses,
  prefixIcon,
  suffixIcon,
  fontSize = "text-[1.2rem]",
  paddingX = "px-[2rem]",
  paddingY = "py-[0.6rem]",
  ...rest
}) => {
  return (
    <button
      className={classNames(
        "flex border border-transparent font-bold transition duration-500 ease-in-out hover:scale-110",
        backgroundColor,
        paddingX,
        paddingY,
        fontSize,
        textColor,
        otherClasses,
        {
          uppercase: uppercase,
          "rounded-full": rounded,
          "rounded-lg": !rounded,
        }
      )}
      {...rest}
    >
      {prefixIcon ? prefixIcon : null} <span>{text}</span>{" "}
      {suffixIcon ? suffixIcon : null}
    </button>
  );
};

export default Button;
