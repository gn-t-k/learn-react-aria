import { FC, PropsWithChildren } from "react";
import { wrapper } from "./button.css";
import { Button as ButtonPrimitive } from "react-aria-components";

export const Button: FC<PropsWithChildren> = ({ children }) => {
  return <ButtonPrimitive className={wrapper()}>{children}</ButtonPrimitive>;
};
