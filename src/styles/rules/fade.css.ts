import type { StyleRule } from "@vanilla-extract/css";
import { enterOpacity, exitOpacity } from "../vars.css";

type FadeIn = (value: string) => StyleRule;
export const fadeIn: FadeIn = (value) => ({
  vars: {
    [enterOpacity]: value,
  },
});

type FadeOut = (value: string) => StyleRule;
export const fadeOut: FadeOut = (value) => ({
  vars: {
    [exitOpacity]: value,
  },
});
