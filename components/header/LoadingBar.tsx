import { useEffect, useRef } from "react";
import styles from "./header.module.scss";

const LoadingBar = () => {
  const indicator = useRef<HTMLDivElement>(null);
  const showIndicator = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    indicator.current!.style.width = scrolled + "%";
  };

  useEffect(() => window.addEventListener("scroll", showIndicator, false), []);
  return (
    <div className={styles.indicator}>
      <div ref={indicator} />
    </div>
  );
};

export default LoadingBar;
