import { StyleRule } from "@vanilla-extract/css";
import deepmerge from "deepmerge";
import { enterBase } from "./enter-base.css";
import { enterScale, exitScale } from "../vars.css";
import { exitBase } from "./exit-base.css";

type ZoomIn = (
  props?:
    | {
        duration?: string | undefined;
        enterScale?: string | undefined;
      }
    | undefined
) => StyleRule;
export const zoomIn: ZoomIn = (props) =>
  deepmerge.all<StyleRule>([
    enterBase(props?.duration),
    {
      vars: {
        [enterScale]: props?.enterScale ?? "0.95",
      },
    },
  ]);

type ZoomOut = (props?: {
  duration?: string | undefined;
  exitScale?: string | undefined;
}) => StyleRule;
export const zoomOut: ZoomOut = (props) =>
  deepmerge.all<StyleRule>([
    exitBase(props?.duration),
    {
      vars: {
        [exitScale]: props?.exitScale ?? "0.95",
      },
    },
  ]);
