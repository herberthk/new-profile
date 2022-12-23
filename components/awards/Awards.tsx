import Link from "next/link";
import Image from "next/image";
import { awards } from "../../mockdata/awards";

import Pointer from "../about/Pointer";
import Boarder from "../services/Boarder";

const Awards = () => {
  return (
    <div className="container mx-auto py-[5rem]" id="section5">
      <div className="mx-auto text-center">
        <Pointer text="Awards" />
        <h1 className="mt-3 text-3xl font-extrabold uppercase tracking-[0.4rem] text-black">
          Certification and awards
        </h1>
        <Boarder classes="bg-[#8c8989]" />
      </div>
      <ul className="mt-11 flex flex-wrap justify-between space-y-5">
        {awards.map(({ from, title, url, id }) => {
          return (
            <li
              className="w-[47%] py-4 shadow-md transition duration-500 ease-in-out hover:scale-110 hover:shadow-xl"
              key={id}
            >
              <ul className="flex">
                <li className="relative mr-7 w-1/4">
                  <Image
                    src="/images/certlog.png"
                    alt="Certificate"
                    style={{ objectFit: "cover" }}
                    fill
                  />
                </li>
                <li className="mx-auto w-3/4">
                  <p className="mb-3 px-5 text-2xl font-bold">
                    Provided by: {from}
                  </p>
                  <p className="px-5 text-2xl">{title}</p>

                  <Link
                    className="px-5 text-base italic hover:underline"
                    href={url}
                    title={title}
                    target={"_blank"}
                  >
                    Yo can view the certificate here
                  </Link>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Awards;
