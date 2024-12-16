"use client";

import Abstract2g from "@/../public/images/abstract2g.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import Button from "../Buttons/PrimaryButton";

function Header() {
  const sliderRef = useRef(null);
  const bottomRefTop = useRef(null);
  const bottomRefBottom = useRef(null);
  const sliderIsInView = useInView(sliderRef);
  const bottomTopIsInView = useInView(bottomRefTop);
  const bottomIsInView = useInView(bottomRefBottom);

  return (
    <header className="pb-10">
      {/* top hero section  */}
      <motion.div
        ref={sliderRef}
        className="md:h-[90vh] sm:h-[80vh] h-[70vh]  bg-contain bg-no-repeat bg-center font-almarai font-light flex flex-col justify-center items-center uppercase -tracking-[2px] px-5 gap-5 min-[1250px]:px-28 min-[900px]:px-20 text-4xl min-[1250px]:text-8xl sm:text-7xl min-[530px]:text-6xl min-[385px]:text-5xl overflow-x-hidden"
        style={{ backgroundImage: `url(${Abstract2g.src})` }}
      >
        <motion.h1
          initial={{
            opacity: 0,
            x: 30,
          }}
          animate={{
            opacity: sliderIsInView ? 1 : 0,
            x: sliderIsInView ? 0 : 30,
          }}
          transition={{
            duration: 0.2,
            ease: "linear",
            stiffness: 200,
            type: "spring",
          }}
          className="self-start"
        >
          Optimize Your <br /> Crypto Holdings
        </motion.h1>
        <motion.h1
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: sliderIsInView ? 1 : 0,
            x: sliderIsInView ? 0 : -30,
          }}
          transition={{
            duration: 0.2,
            ease: "linear",
            stiffness: 200,
            type: "spring",
          }}
          className="self-start min-[920px]:self-end min-[920px]:text-white text-primary-blue"
        >
          with Automated <br /> conversions
        </motion.h1>
      </motion.div>

      {/* bottom hero sections  */}
      <div className="font-barlow overflow-x-hidden">
        <motion.div
          ref={bottomRefTop}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: bottomTopIsInView ? 1 : 0,
            scale: bottomTopIsInView ? 1 : 0.8,
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
            stiffness: 200,
            type: "spring",
            delay: 0.5,
          }}
          className=" leading-7 pb-7"
          style={{
            borderBottom: "2.99px solid",
            borderImageSource:
              "linear-gradient(90deg, #E67EBE 20.68%, #539DE1 54.72%, #3A47E1 86.25%)",
            borderImageSlice: 1,
          }}
        >
          <h3 className=" font-light sm:text-[25px] text-[18px] -tracking-[.5px] text-neutrals-light-grey min-[520px]:text-[28px]">
            Streamline your Portfolio with
          </h3>
          <h3 className=" font-semibold italic text-[20px] sm:text-[28px]">
            CEBOTs Automatic Conversion Feature
          </h3>
        </motion.div>
        <div ref={bottomRefBottom} className=" mt-5 flex items-start">
          <div className=" min-[550px]:flex flex-1 hidden items-center gap-2 text-primary-lilac ">
            <motion.div
              whileHover={{
                scale: 0.9,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 5,
                duration: 0.2,
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className=" text-[40px]">
                <IoPlayCircleOutline />
              </div>
              <span className=" font-bold">Play Reel</span>
            </motion.div>
          </div>
          <div className=" flex-1 flex flex-col gap-10">
            <motion.p
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: bottomIsInView ? 1 : 0,
                x: bottomIsInView ? 0 : 30,
              }}
              transition={{
                duration: 0.3,
                delay: 0.5,
                type: "spring",
                stiffness: 200,
              }}
              className="font-light sm:text-base text-xs text-neutrals-light-grey"
            >
              Take control of your cryptocurrency portfolio like a pro. With
              CEBOTs Automatic Conversions, you can effortlessly convert
              incoming cryptocurrencies into any other supported coins,
              including stablecoins, enhancing your asset management strategy.
            </motion.p>
            <div className="flex gap-4 items-center justify-between">
              <div className=" min-[550px]:hidden flex items-center gap-2 text-primary-lilac cursor-pointer">
                <div className=" text-[40px]">
                  <IoPlayCircleOutline />
                </div>
                <span className=" font-bold">Play Reel</span>
              </div>
              <Button text="START NOW" href="/" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
