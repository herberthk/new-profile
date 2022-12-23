import { description } from "../../mockdata/data";
import Button from "../button/Button";
import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto " id="section2">
      <div className="mb-4 grid grid-cols-2 gap-7">
        <div className="relative mx-auto w-[95%] ">
          <Image
            src="/images/coding.jpg"
            alt="Kavuma Herbert"
            style={{ objectFit: "cover" }}
            fill
            className="hover_me rounded-xl"
          />
        </div>
        <div className="mx-auto">
          <h1 className="mb-4 text-3xl font-bold uppercase tracking-wider">
            Basick Info!
          </h1>
          <p
            className="pb-4 text-xl leading-9"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="mt-4 inline-flex">
            <Button
              text="My work"
              backgroundColor="text-white"
              textColor="text-orange-400"
              otherClasses="hover_me hover:bg-orange-400 hover:text-white"
              onClick={() =>
                document
                  .querySelector("#section6")!
                  .scrollIntoView({ behavior: "smooth" })
              }
            />
            <Button
              text="Hire me"
              backgroundColor="text-white"
              textColor="text-orange-400"
              otherClasses="hover_me ml-4 hover:bg-orange-400 hover:text-white"
              onClick={() =>
                document
                  .querySelector("#section7")!
                  .scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
