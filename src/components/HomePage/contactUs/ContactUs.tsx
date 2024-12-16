"use client";
import Insomnia from "@/../public/images/insomnia.png";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ContactUs() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  // Variants for stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child
      },
    },
  };

  const itemVariants = {
    hidden: { x: 40, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.3,
        stiffness: 200,
        ease: "linear",
      },
    },
  };

  return (
    <section className="flex w-full">
      <div
        className="sm:flex hidden flex-1 min-h-fit bg-no-repeat md:bg-right bg-center bg-cover"
        style={{
          backgroundImage: `url(${Insomnia.src})`,
        }}
      ></div>
      <div
        className="flex-1 w-full"
        style={{
          background:
            "linear-gradient(158.86deg, #030C14 14.57%, #060D32 47.39%, #030B1F 94.45%)",
        }}
      >
        {/* Animation Container */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="w-full flex lg:px-20 sm:px-10 px-8 flex-col justify-center gap-5 py-10"
        >
          {/* Animating Items */}
          <motion.h1
            variants={itemVariants}
            className="font-almarai font-light min-[1035px]:text-6xl min-[875px]:text-5xl sm:text-4xl text-3xl"
          >
            Do you have any questions?
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="font-barlow font-light text-neutrals-dark-grey sm:text-base text-xs"
          >
            {`Contact us, and we'll get back to you within a minute.`}
          </motion.p>
          <motion.div variants={itemVariants} className="max-w-max">
            <PrimaryButton text="CONTACT US" href="/" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactUs;
