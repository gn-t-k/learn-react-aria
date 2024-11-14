import { FC, PropsWithChildren } from "react";
import * as styles from "./button.css";
import { Button as AriaButton, ButtonProps } from "react-aria-components";
import clsx from "clsx";

type Props = ButtonProps & styles.ButtonVariants;
export const Button: FC<PropsWithChildren<Props>> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <AriaButton
      className={clsx([className, styles.button({ variant, size })])}
      {...props}
    />
  );
};
