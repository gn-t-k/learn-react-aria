import { FC, PropsWithChildren } from "react";
import { wrapper } from "./button.css";
import { Button as ButtonPrimitive, ButtonProps } from "react-aria-components";
import { ButtonVariants } from "./button.css";
import clsx from "clsx";

type Props = ButtonProps & ButtonVariants;
export const Button: FC<PropsWithChildren<Props>> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <ButtonPrimitive
      className={clsx([className, wrapper({ variant, size })])}
      {...props}
    />
  );
};
