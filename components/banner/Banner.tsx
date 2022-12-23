import Image from "next/image";
import styles from "./banner.module.scss";
import classNames from "classnames";
import { bioInfo } from "../../mockdata/data";
import Pointer from "../about/Pointer";
const Banner = () => {
  return (
    <div className={classNames("mt-12 mb-7 rounded-md p-10", styles.banner)}>
      <div className="grid grid-cols-2 gap-9">
        <div className="w-full">
          <Pointer text="Hi I AM!" />
          <h6 className={styles.title}>FULL STACK SOFTWARE ENGENEER</h6>
          <ul className="mt-5 flex flex-col space-y-4 border-t-[1px] py-5 text-white">
            {Object.entries(bioInfo).map(([key, value]) => (
              <li key={key}>
                <ul className="flex">
                  <li className="w-[20%] uppercase">
                    <b>{key}</b>
                  </li>
                  <li
                    className="hover:text-orange-300"
                    dangerouslySetInnerHTML={{ __html: value }}
                  />
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative ml-auto h-[491px] w-[369px] rounded-2xl border-[5px] border-orange-400">
          <Image
            src="/images/pic.jpg"
            alt="Kavuma Herbert"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
