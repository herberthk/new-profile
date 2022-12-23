import { services } from "../../mockdata/data";
import Pointer from "../about/Pointer";
import Boarder from "./Boarder";
import Icon from "./Icon";

const Services = () => {
  return (
    <div className="bg-[#1b242f;] py-[5rem]" id="section3">
      <div className="container mx-auto">
        <div className="mx-auto text-center">
          <Pointer text="What I Do" />
          <h1 className="mt-3 text-3xl font-extrabold tracking-[0.4rem] text-white">
            MY SKILLS
          </h1>
          <Boarder />
        </div>
        <ul className="mt-11 flex flex-wrap justify-between space-y-5">
          {services.map(({ desc, icon, tile, id }) => {
            return (
              <li className="w-1/2" key={id}>
                <ul className="flex">
                  <li className="mr-7">
                    <Icon>
                      <i className={icon} />
                    </Icon>
                  </li>
                  <li>
                    <p className="mb-3 px-5 text-3xl font-bold uppercase text-orange-400">
                      {tile}
                    </p>
                    <p className="px-5 text-2xl text-[#f5deb3]">{desc}</p>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Services;
