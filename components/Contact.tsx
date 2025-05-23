"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmails";

import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

import { FaPhone, FaCopy, FaWhatsapp, FaCat } from "react-icons/fa";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0);

  const handleBookCall = () => {
    window.location.href = "tel:+6285163635128";
  };

  const handleCopyEmail = () => {
    const email = "hnaufal123@gmail.com";
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard");
  };

  const handleWhatsappDM = () => {
    window.location.href = "https://wa.me/+6285163635128";
  };
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,35rem)] text-center sm:text-left scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="my-2">Let&apos;s talk about working together!</p>

      <div className="flex justify-center items-center gap-3 flex-col sm:flex-row w-full sm:w-auto mx-auto mt-5 cursor-pointer">
        <a
          href="tel:+6285163635128"
          className="group bg-gray-900  text-white/80 w-[80vw] sm:w-52 py-3 flex items-center justify-center gap-2 rounded-md outline-none focus:scale-110 active:scale-105 transition duration-300 hover:text-white text-sm xl:text-base uppercase text-center font-semibold dark:bg-[#FFD700] dark:text-black"
          onClick={handleBookCall}
        >
          <FaPhone /> Book a Call
        </a>
        <a
          className="group bg-gray-900  text-white/80 w-[80vw] sm:w-52 py-3 flex items-center justify-center gap-2 rounded-md outline-none focus:scale-110 active:scale-105 transition duration-300 hover:text-white text-sm xl:text-base uppercase text-center font-semibold dark:bg-[#FFD700] dark:text-black"
          onClick={handleCopyEmail}
        >
          <FaCopy /> Copy Email
        </a>
        <a
          className="group bg-gray-900  text-white/80 w-[80vw] sm:w-52 py-3 flex items-center justify-center gap-2 rounded-md outline-none focus:scale-110 active:scale-105 transition duration-300 hover:text-white text-sm xl:text-base uppercase text-center font-semibold dark:bg-[#FFD700] dark:text-black"
          href="https://wa.me/+6285163635128"
          onClick={handleWhatsappDM}
        >
          <FaWhatsapp /> DM Me
        </a>
      </div>
      <div className="flex items-center justify-center mt-6 hover:scale-110 transition-all duration-500">
        <FaCat className="" />
      </div>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        {/* Honeypot field for bot prevention */}
        <input type="text" name="honeypot" className="hidden" />

        <div className="flex justify-between items-center gap-2">
          <input
            className="h-10 md:h-12 2xl:h-14 px-4 rounded borderBlack dark:bg-[#151313]  transition-all outline-none w-1/2  focus:border-[#FF2E63] placeholder-gray-800 text-gray-900 dark:placeholder-[#eaeaeab9] dark:text-[#fdfdfd]"
            name="name"
            type="text"
            required
            maxLength={100}
            placeholder="Your name"
          />
          <input
            className="h-10 md:h-12 2xl:h-14 px-4 rounded borderBlack dark:bg-[#151313] transition-all outline-none w-1/2  focus:border-[#FF2E63] placeholder-gray-800 text-gray-900 dark:placeholder-[#eaeaeab9] dark:text-[#fdfdfd]"
            name="email"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
        </div>

        <textarea
          className="h-40 my-3 rounded-md borderBlack p-4 dark:bg-[#151313]  transition-all outline-none focus:border-[#FF2E63] placeholder-gray-800 text-gray-900 dark:placeholder-[#eaeaeab9] dark:text-[#fdfdfd]"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};
export default Contact;
