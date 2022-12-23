import Link from "next/link";
import { projects } from "../../mockdata/projects";
import Pointer from "../about/Pointer";
import Boarder from "../services/Boarder";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="container mx-auto py-[5rem]" id="section6">
      <div className="mx-auto text-center">
        <Pointer text="Projects" />
        <h1 className="mt-3 text-3xl font-extrabold uppercase tracking-[0.4rem]">
          My Recent projects
        </h1>
        <Boarder />
      </div>
      <ul className="mt-7 flex flex-col justify-between space-y-5">
        {projects.map(({ desc, id, imageUrl, name, url }, i) => {
          const index = i + 1;
          return index % 2 === 0 ? (
            <li key={id} className="hover_me">
              <ul className="flex justify-between space-x-4">
                <li className="relative w-1/2">
                  <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    style={{ objectFit: "cover" }}
                    // className="w-full"
                  />
                </li>
                <li className="w-1/2 p-6">
                  <p className="mb-4 text-2xl font-bold uppercase">{name}</p>
                  <p className="text-2xl">{desc}</p>
                  <Link
                    className="mt-3 text-lg font-bold text-orange-400 hover:underline"
                    href={url}
                    target={"_blank"}
                  >
                    <i>{name} is available here</i>
                  </Link>
                </li>
              </ul>
            </li>
          ) : (
            <li key={id} className="hover_me p-6">
              <ul className="flex justify-between space-x-4">
                <li className="w-1/2">
                  <p className="mb-4 text-2xl font-bold uppercase">{name}</p>
                  <p className="text-2xl">{desc}</p>
                  <Link
                    href={url}
                    target={"_blank"}
                    className="mt-3 text-lg font-bold text-orange-400 hover:underline"
                  >
                    <i>{name} is available here</i>
                  </Link>
                </li>
                <li className="relative w-1/2">
                  <Image
                    src={imageUrl}
                    fill
                    style={{ objectFit: "cover" }}
                    alt={name}
                  />
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
