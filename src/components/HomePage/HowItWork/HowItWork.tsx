"use client";

import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import SecondaryButton from "../../Buttons/SecondaryButton";

type PropsType = {
  title: string;
  description: string;
  svg_icon_md: React.ReactNode;
  svg_icon_sm: React.ReactNode;
};

const HowItWork = ({
  title,
  description,
  svg_icon_md,
  svg_icon_sm,
}: PropsType) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [width, setWidth] = useState<number | null>(null);
  const [fixedWidth, setFixedWidth] = useState(false);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (width !== null) {
      setFixedWidth(width < 850);
    }
  }, [width]);

  return (
    <motion.div
      ref={ref}
      className="flex gap-4 min-[850px]:px-0 px-4  bg-black"
    >
      {/* Left Section */}
      <div className="flex-1 w-full flex flex-col gap-5 min-[850px]:justify-normal justify-between sm:h-auto h-[90vh]">
        <div>
          <div className=" max-w-max">
            <motion.div
              key={title}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 40 }}
              transition={{
                type: "spring",
                stiffness: 200,
                duration: 0.3,
                delay: 0.05,
              }}
            >
              <SecondaryButton
                href="/"
                textColor="#fff"
                backgroundColor="linear-gradient(180deg, rgba(58, 71, 225, 0) 0%, rgba(58, 71, 225, 0.5) 100%)"
              />
            </motion.div>
          </div>
          <motion.h1
            key={title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 40 }}
            transition={{
              type: "spring",
              stiffness: 200,
              duration: 0.3,
              delay: 0.1,
            }}
            className="mt-5 font-almarai font-light sm:text-5xl text-3xl -tracking-[1px] "
          >
            {title}
          </motion.h1>
        </div>
        {/* For small devices */}
        {fixedWidth && (
          <motion.div
            className="self-center"
            key={title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {svg_icon_sm}
          </motion.div>
        )}

        <motion.p
          key={description}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 40 }}
          transition={{
            type: "spring",
            stiffness: 200,
            duration: 0.3,
            delay: 0.2,
          }}
          className="font-barlow sm:text-base text-xs font-light text-[#DEDEDE] min-[575px]:text-start text-center "
        >
          {description}
        </motion.p>
      </div>

      {/* Right Section: Image */}
      <motion.div
        key={title}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
        transition={{
          type: "spring",
          stiffness: 200,
          duration: 0.3,
        }}
        className="min-[850px]:flex hidden flex-1 h-[462px] max-w-max items-center justify-center rounded overflow-hidden"
      >
        {svg_icon_md}
      </motion.div>
    </motion.div>
  );
};

export default HowItWork;
