import { style } from "@vanilla-extract/css";
import { ValueOf } from "../../../utils/value-of";
import { tokens } from "../../theme.css";

// .with-sidebar {
//   display: flex;
//   flex-wrap: wrap;
//   gap: var(--gutter, var(--s1))
// }

// .with-sidebar > :first-child {
//   /* サイドバーがサイドバーたりうる値 */
//   flex-basis: 20rem;
//   flex-grow: 1
// }

// .with-sidebar > :last-child {
//   /* 0から伸長する */
//   flex-basis: 0;
//   flex-grow: 999;
//   /* 要素の幅が等しくなった場合に折り返す */
//   min-width: 50%;
// }
type Props =
  | {
      side?: "left" | "right" | undefined;
      sideWidth?: ValueOf<typeof tokens.width> | undefined;
      contentMinWidth?: ValueOf<typeof tokens.width> | undefined;
      gutter?: ValueOf<typeof tokens.spacing> | undefined;
    }
  | undefined;
