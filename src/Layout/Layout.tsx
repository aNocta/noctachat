import React, { FC, ReactNode } from "react";
import styles from "./Layout.module.scss";

interface LayoutProps {
  stateCallback: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ stateCallback, visible, children }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden ${
        visible ? styles.layout : styles.layoutDisabled
      }`}
    >
      <div
        onClick={() => stateCallback(false)}
        className={styles.background}
      ></div>
      <div className="z-50">{children}</div>
    </div>
  );
};

export { Layout };
