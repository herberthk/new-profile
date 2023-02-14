import { Link as Scroll } from "react-scroll";
import classNames from "classnames";
import Logo from "./Logo";
import styles from "./header.module.scss";
import { motion } from "framer-motion";
import { navVariants } from "../util/motion";
import { FC, useState } from "react";
import SmallMenu from "./SmallMenu";

type Props = {
  showMenu: () => void;
};

const MenuIcon: FC<Props> = ({ showMenu }) => {
  return (
    <svg
      fill="#fffafa"
      width="55px"
      height="55px"
      viewBox="-5.5 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#fffafa"
      transform="matrix(-1, 0, 0, -1, 0, 0)rotate(0)"
      onClick={() => showMenu()}
      className="sm:hidden"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>menu</title>{" "}
        <path d="M1.375 9.156h18.063c0.781 0 1.375-0.594 1.375-1.375 0-0.75-0.594-1.344-1.375-1.344h-18.063c-0.781 0-1.375 0.594-1.375 1.344 0 0.781 0.594 1.375 1.375 1.375zM1.375 14.625h18.063c0.781 0 1.375-0.594 1.375-1.375 0-0.75-0.594-1.344-1.375-1.344h-18.063c-0.781 0-1.375 0.594-1.375 1.344 0 0.781 0.594 1.375 1.375 1.375zM1.375 20.094h18.063c0.781 0 1.375-0.594 1.375-1.344 0-0.781-0.594-1.375-1.375-1.375h-18.063c-0.781 0-1.375 0.594-1.375 1.375 0 0.75 0.594 1.344 1.375 1.344zM1.375 25.563h18.063c0.781 0 1.375-0.594 1.375-1.344 0-0.781-0.594-1.375-1.375-1.375h-18.063c-0.781 0-1.375 0.594-1.375 1.375 0 0.75 0.594 1.344 1.375 1.344z"></path>
      </g>
    </svg>
  );
};
const HeaderLinks = () => {
  const [show, setShowMenu] = useState(false);
  const showMenu = () => setShowMenu(!show);
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
      className="flex flex-col justify-between pt-5 sm:flex-row"
      variants={navVariants}
      initial="hidden"
      whileInView="show"
    >
      <div className="flex">
        <MenuIcon showMenu={showMenu} />
        <Logo />
      </div>
      <ul
        className={classNames(
          "mx-auto mt-4 hidden flex-row space-x-6 sm:flex",
          styles.links
        )}
      >
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
      {show && <SmallMenu />}
    </motion.div>
  );
};

export default HeaderLinks;
