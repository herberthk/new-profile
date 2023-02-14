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
import { FormEvent, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Bottom = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const d = new Date();
  const currentYear = d.getFullYear();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post("/api", {
        email,
        name,
        message,
      });

      toast.success(result.data.message, {
        closeOnClick: true,
        progress: undefined,
      });
      toast.success(`He'll respond to you with in 24 hours`, {
        closeOnClick: true,
        progress: undefined,
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Something went wrong ", {
        closeOnClick: true,
        progress: undefined,
      });
    } finally {
      setLoading(false);
    }
  };
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
            onSubmit={handleSubmit}
            action="post"
            className="mx-auto sm:w-1/2"
          >
            <TextInput
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
              otherClasses="mb-4 rounded-full"
              required
            />
            <TextInput
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              type="email"
              placeholder="Email"
              otherClasses="rounded-full"
            />
            <TextArea
              inputClassName="mt-4 rounded-lg"
              placeholder="Message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              // isValid={false}
            />
            <div data-netlify-recaptcha="true"></div>
            {loading ? (
              <Button
                text="Please wait"
                backgroundColor="bg-white"
                otherClasses="text-orange-400 font-bold mx-auto mt-4 uppercase"
              />
            ) : (
              <Button
                text="Send"
                disabled={loading}
                backgroundColor="bg-white"
                otherClasses="text-orange-400 font-bold mx-auto mt-4 uppercase"
                type="submit"
              />
            )}
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
