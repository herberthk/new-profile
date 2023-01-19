import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./header.module.scss";

const LoadingBar = () => {
  // const { scrollYProgress } = useScroll();
  const [width, setWidth] = useState(0);
  // const indicator = useRef<HTMLDivElement>(null);
  const showIndicator = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setWidth(scrolled);
    // indicator.current!.style.width = scrolled + "%";
  };

  useEffect(() => window.addEventListener("scroll", showIndicator, false), []);
  // console.log("scroll", scrollYProgress);
  return (
    <div className={styles.indicator}>
      <motion.div
        layout
        style={{
          // scaleX: scrollYProgress,
          width: width + "%",
        }}
      />
    </div>
  );
};

export default LoadingBar;
