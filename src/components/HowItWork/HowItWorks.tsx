"use client";

import image_1 from "@/../public/images/HowItWork/img_1.svg";
import image_2 from "@/../public/images/HowItWork/img_2.svg";
import image_3 from "@/../public/images/HowItWork/img_3.svg";
import image_4 from "@/../public/images/HowItWork/img_4.svg";
import { motion, useInView } from "framer-motion";
import { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import HowItWork from "./HowItWork";
import StepProvider from "./StepProvider";

interface Step {
  title: string;
  description: string;
  image: StaticImageData;
}

function HowItWorks() {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const steps: Step[] = [
    {
      title: "Automated Crypto Reception",
      description:
        "As cryptocurrencies are received, they're instantly deposited into your CEBOT Exchange account.",
      image: image_1,
    },
    {
      title: "Customizable Conversion Rules",
      description:
        "Set your preferred conversion parameters in advance. Choose which incoming cryptocurrencies you want to auto-convert and specify the target coins.",
      image: image_2,
    },
    {
      title: "Seamless Asset Transition",
      description:
        "Our system follows your instructions precisely, automatically converting and redirecting funds to your selected supported coins.",
      image: image_3,
    },
    {
      title: "Efficient Portfolio Management",
      description:
        "Simplify transactions and manage your assets effortlessly through our streamlined and automated process.",
      image: image_4,
    },
  ];

  const [inViewIndex, setInViewIndex] = useState<number>(-1);

  useEffect(() => {
    if (inViewIndex !== -1) {
      setCurrentIndex(inViewIndex);
    }
  }, [inViewIndex]);

  return (
    <section className="w-full flex items-center justify-center pt-16">
      <div className="flex justify-between w-full relative">
        <div className="basis-[25%] h-[90vh] sticky top-32">
          <StepProvider currentIndex={currentIndex} />
        </div>
        <div className="basis-[75%] flex flex-col gap-10">
          {steps.map((step, index) => {
            const stepVariants = {
              initial: { scale: 0.8, opacity: 0 },
              inView: { scale: 1, opacity: 1 },
              exit: { scale: 0.8, opacity: 0 },
            };

            const ref = useRef(null);
            const inView = useInView(ref, {
              margin: "-400px 0px 0px 400px",
            });

            useEffect(() => {
              if (inView && inViewIndex !== index) {
                setInViewIndex(index);
              } else if (!inView && inViewIndex === index) {
                setInViewIndex(-1);
              }
            }, [inView, index, inViewIndex]);

            return (
              <motion.div
                key={index}
                ref={ref}
                className="min-w-full h-screen self-center bg-black"
                variants={stepVariants}
                initial="initial"
                animate={inView ? "inView" : "exit"}
                transition={{
                  duration: 0.9,
                  ease: "easeOut",
                }}
              >
                <HowItWork
                  title={step.title}
                  description={step.description}
                  image={step.image}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
