import { StyleRule } from "@vanilla-extract/css";

type Props = {
  size: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
};

export const square = (props: Props) =>
  ({
    1: {
      width: "0.25rem",
      height: "0.25rem",
    },
    2: {
      width: "0.5rem",
      height: "0.5rem",
    },
    3: {
      width: "0.75rem",
      height: "0.75rem",
    },
    4: {
      width: "1rem",
      height: "1rem",
    },
    5: {
      width: "1.25rem",
      height: "1.25rem",
    },
    6: {
      width: "1.5rem",
      height: "1.5rem",
    },
    7: {
      width: "1.75rem",
      height: "1.75rem",
    },
    8: {
      width: "2rem",
      height: "2rem",
    },
    9: {
      width: "2.25rem",
      height: "2.25rem",
    },
    10: {
      width: "2.5rem",
      height: "2.5rem",
    },
  }[props.size] satisfies StyleRule);
