"use client";
import technology from "@/../public/images/technology.svg";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SecondaryButton from "../../Buttons/SecondaryButton";

function Technology() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const titleIsInView = useInView(titleRef);
  const descriptionIsInView = useInView(descriptionRef);

  return (
    <section className="  bg-[#052542] w-full overflow-hidden">
      <div className="bg-[#3A47E1] w-full rounded-b-[50px] overflow-hidden">
        <div
          style={{
            background:
              "radial-gradient(43.11% 43.11% at 50% 50%, rgba(49, 189, 254, 0.5) 0%, rgba(58, 71, 225, 0.5) 100%)",
          }}
        >
          <div className="text-white md:py-24 py-14 pl-8 pr-8 min-[1030px]:pr-24 flex items-center justify-between relative">
            <div className="flex flex-col lg:flex-[0_0_70%] gap-36">
              <div className=" z-20">
                <div className=" max-w-max ">
                  <SecondaryButton
                    href="/"
                    textColor="#ffffff"
                    backgroundColor="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%)"
                  />
                </div>
                <motion.h1
                  ref={titleRef}
                  initial={{
                    x: 40,
                    opacity: 0,
                  }}
                  animate={{
                    x: titleIsInView ? 0 : 40,
                    opacity: titleIsInView ? 1 : 0,
                  }}
                  transition={{
                    type: "spring",
                    duration: 0.3,
                    delay: 0.5,
                    stiffness: 200,
                  }}
                  className=" font-almarai font-light sm:text-6xl text-3xl  mt-3 -tracking-[1px]"
                >
                  Advanced Technology
                </motion.h1>
              </div>
              <motion.div
                ref={descriptionRef}
                initial={{
                  x: 40,
                  opacity: 0,
                }}
                animate={{
                  x: descriptionIsInView ? 0 : 40,
                  opacity: descriptionIsInView ? 1 : 0,
                }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  delay: 0.5,
                  stiffness: 200,
                }}
                className=" font-barlow z-20"
              >
                <p className=" sm:text-lg text-base font-medium">
                  Harness the power of cutting-edge technology with Cebot.{" "}
                </p>
                <p className=" font-light sm:text-base text-xs  mt-3">
                  Our platform allows you to bypass intermediaries, maintaining
                  full anonymity in your transactions. By minimizing third-party
                  involvement, we make it virtually impossible to trace the
                  origin or destination of any monetary transactions. We uphold
                  the original intent of digital currencies by preserving the
                  right to privacy they provide to users. Our innovative
                  solutions ensure that you can conduct your crypto activities
                  securely and efficiently.
                </p>
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -7, 7, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  delay: 0.5,
                  ease: "linear",
                }}
                className=" absolute right-0 top-0"
              >
                <Image src={technology} alt="Technology" width={570} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
