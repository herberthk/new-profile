import Link from "next/link";
import Pointer from "../about/Pointer";
import Button from "../button/Button";
import TextArea from "../input/TextArea";
import { TextInput } from "../input/TextInput";
import Boarder from "../skills/Boarder";
import SocialIcon from "./SocialIcon";
import styles from "./social-icons.module.scss";
import ScrollTop from "./ScrollTop";
import { TypingTextHeader } from "../others/TypingText";
import { motion } from "framer-motion";
import { slideIn } from "../util/motion";

const Bottom = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  // console.log(currentYear);
  return (
    <motion.div
      className="bg-gradient-to-r from-[#1b242f] via-purple-500 to-pink-500 pt-[5rem] pb-5"
      id="section7"
      // variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      // viewport={{ once: false, amount: 0.25 }}
    >
      <div className="container mx-auto text-center">
        <Pointer text="Contact me" />
        <TypingTextHeader text="Get in touch with me" />
        <Boarder />
        <motion.div
          variants={slideIn("right", "tween", 0, 1)}
          className="mt-7 p-6"
        >
          <form
            action="post"
            data-netlify="true"
            data-netlify-recaptcha="true"
            className="mx-auto sm:w-1/2"
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
        </motion.div>
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
    </motion.div>
  );
};

export default Bottom;
