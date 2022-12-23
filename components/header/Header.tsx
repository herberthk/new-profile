import classNames from "classnames";
import Image from "next/image";
import Banner from "../banner/Banner";
import HeaderLinks from "./Head";
import styles from "./header.module.scss";
import LoadingBar from "./LoadingBar";

const Header = () => {
  return (
    <div
      id="section1"
      className={classNames("relative flex flex-col", styles.header)}
    >
      <LoadingBar />
      <div className="mx-auto lg:container">
        <Image
          src="/images/bacbg.jpg"
          alt="bg"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: -1,
          }}
        />
        <HeaderLinks />
        <Banner />
      </div>
    </div>
  );
};

export default Header;
