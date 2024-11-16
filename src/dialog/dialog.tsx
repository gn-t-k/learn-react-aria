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
import { VisuallyHidden } from "react-aria";
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
      className={composeRenderProps(className, (className) =>
        clsx([styles.dialogOverlay, className])
      )}
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
  return (
    <AriaModal
      className={composeRenderProps(className, (className) =>
        clsx([styles.dialogContentModal, className])
      )}
      {...props}
    >
      <AriaDialog role={role} className={styles.dialogContent}>
        {composeRenderProps(children, (children, renderProps) => (
          <>
            {children}
            {closeButton && (
              <AriaButton
                onPress={renderProps.close}
                className={styles.dialogCloseButton}
              >
                <X className={styles.dialogCloseButtonIcon} />
                <VisuallyHidden>Close</VisuallyHidden>
              </AriaButton>
            )}
          </>
        ))}
      </AriaDialog>
    </AriaModal>
  );
};

export const DialogHeader: FC<ComponentProps<"header">> = ({
  className,
  ...props
}) => {
  return (
    <header className={clsx([styles.dialogHeader, className])} {...props} />
  );
};

export const DialogFooter: FC<ComponentProps<"footer">> = ({
  className,
  ...props
}) => {
  return (
    <footer className={clsx([styles.dialogFooter, className])} {...props} />
  );
};

export const DialogTitle: FC<AriaHeadingProps> = ({ className, ...props }) => (
  <AriaHeading
    slot="title"
    className={clsx([styles.dialogTitle, className])}
    {...props}
  />
);

export const DialogDescription: FC<ComponentProps<"p">> = ({
  className,
  ...props
}) => <p className={clsx([styles.dialogDescription, className])} {...props} />;
