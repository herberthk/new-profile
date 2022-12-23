import Link from "next/link";
import Pointer from "../about/Pointer";
import Button from "../button/Button";
import TextArea from "../input/TextArea";
import { TextInput } from "../input/TextInput";
import Boarder from "../services/Boarder";
import SocialIcon from "./SocialIcon";
import styles from "./social-icons.module.scss";
import ScrollTop from "./ScrollTop";

const Bottom = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  // console.log(currentYear);
  return (
    <div className="bg-[#1b242f;] pt-[5rem] pb-5" id="section7">
      <div className="container mx-auto text-center">
        <Pointer text="Contact me" />
        <h1 className="mt-3 text-3xl font-extrabold uppercase tracking-[0.4rem] text-white">
          Get in touch with me
        </h1>
        <Boarder />
        <div className="mt-7 p-6">
          <form
            action="post"
            data-netlify="true"
            data-netlify-recaptcha="true"
            className="mx-auto w-1/2"
          >
            <TextInput
              type="text"
              name="name"
              // value=""
              placeholder="Name"
              otherClasses="mb-4 rounded-full"
              required
              id="name"
            />
            <TextInput
              name="email"
              // value=""
              id="email"
              required
              type="email"
              placeholder="Email"
              otherClasses="rounded-full"
            />
            <TextArea
              inputClassName="mt-4 rounded-lg"
              placeholder="Message"
              name="message"
              id="message"
              required
              // isValid={false}
            />
            <div data-netlify-recaptcha="true"></div>
            <Button
              text="Send"
              backgroundColor="bg-white"
              otherClasses="text-orange-400 font-bold mx-auto mt-4 uppercase"
              type="submit"
            />
          </form>
        </div>
        <div className="mx-auto mt-3">
          <p className="text-white">
            © {currentYear} Herbert . All rights reserved
          </p>
          <SocialIcon>
            <li>
              <Link href="#!" />
            </li>
            <li>
              <Link href="#!" className={styles.fb} />
            </li>
            <li>
              <Link href="#!" className={styles.lin} />
            </li>
            <li>
              <Link href="#!" className={styles.dot} />
            </li>
          </SocialIcon>
        </div>
      </div>
      <ScrollTop />
    </div>
  );
};

export default Bottom;
