import { Link as Scroll } from "react-scroll";
import classNames from "classnames";
import Logo from "./Logo";
import styles from "./header.module.scss";
import { motion } from "framer-motion";
import { navVariants } from "../util/motion";
const HeaderLinks = () => {
  //   const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  //   const headerRef = useRef<HTMLDivElement>(null);

  //   // handle scroll event
  //   const handleScroll = (elTopOffset: number, elHeight: number) => {
  //     if (window.pageYOffset > elTopOffset + elHeight) {
  //       setSticky({ isSticky: true, offset: elHeight });
  //     } else {
  //       setSticky({ isSticky: false, offset: 0 });
  //     }
  //   };

  //   // add/remove scroll event listener
  //   useEffect(() => {
  //     var header = headerRef.current!.getBoundingClientRect();
  //     const handleScrollEvent = () => {
  //       handleScroll(header.top, header.height);
  //     };

  //     window.addEventListener("scroll", handleScrollEvent);

  //     return () => {
  //       window.removeEventListener("scroll", handleScrollEvent);
  //     };
  //   }, []);
  return (
    <motion.div
      className="flex justify-between pt-5"
      variants={navVariants}
      initial="hidden"
      whileInView="show"
    >
      <Logo />
      <ul className={classNames("mt-4 space-x-6", styles.links)}>
        <li>
          <Scroll
            activeClass="activeScroll"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            data-hover="Home"
          >
            Home
          </Scroll>
        </li>
        <li>
          <Scroll
            activeClass="activeScroll"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            data-hover="About"
          >
            About
          </Scroll>
        </li>
        <li>
          <Scroll
            activeClass="activeScroll"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            data-hover="Skills"
          >
            Skills
          </Scroll>
        </li>
        <li>
          <Scroll
            activeClass="activeScroll"
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            data-hover="Experience"
          >
            Experience
          </Scroll>
        </li>
        <li>
          <Scroll
            activeClass="activeScroll"
            to="section5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            data-hover="Awards"
          >
            Awards
          </Scroll>
        </li>
        <li>
          <Scroll
            activeClass="activeScroll"
            to="section6"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            data-hover="Projects"
          >
            Projects
          </Scroll>
        </li>
        <li>
          <Scroll
            activeClass="activeScroll"
            to="section7"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            data-hover=" Contact"
          >
            Contact
          </Scroll>
        </li>
      </ul>
    </motion.div>
  );
};

export default HeaderLinks;
