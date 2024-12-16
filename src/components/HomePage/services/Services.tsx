"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ServiceTabs from "./SearviceTabs";

function Services() {
  const titleRef = useRef(null);
  const titleIsInView = useInView(titleRef);

  return (
    <section className=" bg-[#030C14]">
      <div
        className="  w-full rounded-t-[50px] py-14 lg:py-20 px-8 flex items-center justify-center"
        style={{
          background:
            "linear-gradient(360.31deg, rgba(11, 14, 51, 0) 0.1%, #0B0E33 108.11%)",
        }}
      >
        <div>
          <motion.h1
            ref={titleRef}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: titleIsInView ? 1 : 0,
              y: titleIsInView ? 0 : 20,
            }}
            transition={{
              delay: 0.5,
              duration: 0.3,
              type: "spring",
              stiffness: 200,
              ease: "linear",
            }}
            className=" font-almarai font-light min-[1000px]:text-6xl min-[720px]:text-5xl sm:text-4xl text-3xl text-center sm:text-start "
          >
            What can you do with <span className=" text-[#979EEE]">CEBOT</span>
          </motion.h1>
        </div>
      </div>
      <div className=" w-full px-8 lg:px-24 pb-10">
        <ServiceTabs />
      </div>
    </section>
  );
}

export default Services;
