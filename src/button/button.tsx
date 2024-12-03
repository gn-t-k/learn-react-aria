import { ElementRef, forwardRef, ForwardRefRenderFunction } from "react";
import * as styles from "./button.css";
import { Button as AriaButton, ButtonProps } from "react-aria-components";
import clsx from "clsx";

type Props = ButtonProps & styles.ButtonVariants;

const ButtonRender: ForwardRefRenderFunction<ElementRef<"button">, Props> = (
  { className, variant, size, ...props },
  ref
) => {
  return (
    <AriaButton
      className={clsx([className, styles.button({ variant, size })])}
      ref={ref}
      {...props}
    />
  );
};
export const Button = forwardRef(ButtonRender);
