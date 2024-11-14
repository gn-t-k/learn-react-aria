import clsx from "clsx";
import { X } from "lucide-react";
import { ComponentProps, FC } from "react";
import {
  Button as AriaButton,
  Dialog as AriaDialog,
  DialogProps as AriaDialogProps,
  DialogTrigger as AriaDialogTrigger,
  Heading as AriaHeading,
  HeadingProps as AriaHeadingProps,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  ModalOverlayProps as AriaModalOverlayProps,
  composeRenderProps,
} from "react-aria-components";
import * as styles from "./dialog.css";

export const Dialog = AriaDialog;

export const DialogTrigger = AriaDialogTrigger;

export const DialogOverlay: FC<AriaModalOverlayProps> = ({
  className,
  isDismissable = true,
  ...props
}) => {
  return (
    <AriaModalOverlay
      isDismissable={isDismissable}
      className={clsx([className, styles.dialogOverlay])}
      {...props}
    />
  );
};

type DialogContentProps = Omit<ComponentProps<typeof AriaModal>, "children"> & {
  children?: AriaDialogProps["children"];
  role?: AriaDialogProps["role"];
  closeButton?: boolean;
};
export const DialogContent: FC<DialogContentProps> = ({
  className,
  children,
  role,
  closeButton = true,
  ...props
}) => {
  return <AriaModal />;
};
