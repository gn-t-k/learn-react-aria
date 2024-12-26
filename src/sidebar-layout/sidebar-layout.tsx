import { FC, ReactNode } from "react";
import * as styles from "./sidebar-layout.css";

type Props = {
  mainContent: ReactNode;
  asideContent: ReactNode;
};

export const SidebarLayout: FC<Props> = ({ mainContent, asideContent }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.fixed}>{asideContent}</div>
      <div className={styles.flexible}>{mainContent}</div>
    </div>
  );
};
