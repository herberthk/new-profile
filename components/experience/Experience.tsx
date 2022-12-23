import { experience } from "../../mockdata/experience";
import Pointer from "../about/Pointer";
import Boarder from "../services/Boarder";
import TimeLine from "./TimeLine";
import Year from "./Year";
import styles from "./experience.module.scss";

const Experience = () => {
  return (
    <div className="container mx-auto py-[5rem]" id="section4">
      <div className="mx-auto text-center">
        <Pointer text="EXPERIENCE" />
        <h1 className="mt-3 text-3xl font-extrabold uppercase tracking-[0.4rem] text-black">
          MY Experience
        </h1>
        <Boarder classes="bg-[#8c8989]" />
      </div>
      <div className="mt-[3rem]">
        {experience.map(({ desc, link, name, year }, i) => (
          <div key={i} className=" grid grid-cols-2">
            <Year
              year={year}
              bgColor={(i + 1) % 2 === 0 ? styles.orange : styles.green}
            />
            <TimeLine
              desc={desc}
              iconBg={(i + 1) % 2 === 0 ? styles.red : styles.blue}
              link={link}
              name={name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
