"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import HowItWork from "./HowItWork";
import { SVG_1, SVG_2, SVG_3, SVG_4 } from "./Icons";
import StepProvider from "./StepProvider";

interface Step {
  title: string;
  description: string;
  svg_icon_md: React.ReactNode;
  svg_icon_sm: React.ReactNode;
}

function HowItWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const steps: Step[] = [
    {
      title: "Automated Crypto Reception",
      description:
        "As cryptocurrencies are received, they're instantly deposited into your CEBOT Exchange account.",
      svg_icon_md: <SVG_1 />,
      svg_icon_sm: <SVG_1 height="50vh" />,
    },
    {
      title: "Customizable Conversion Rules",
      description:
        "Set your preferred conversion parameters in advance. Choose which incoming cryptocurrencies you want to auto-convert and specify the target coins.",
      svg_icon_md: <SVG_2 />,
      svg_icon_sm: <SVG_2 height="50vh" />,
    },
    {
      title: "Seamless Asset Transition",
      description:
        "Our system follows your instructions precisely, automatically converting and redirecting funds to your selected supported coins.",
      svg_icon_md: <SVG_3 />,
      svg_icon_sm: <SVG_3 height="50vh" />,
    },
    {
      title: "Efficient Portfolio Management",
      description:
        "Simplify transactions and manage your assets effortlessly through our streamlined and automated process.",
      svg_icon_md: <SVG_4 />,
      svg_icon_sm: <SVG_4 height="50vh" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const sections = Array.from(ref.current.children);
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        const newIndex = sections.findIndex((section) => {
          const rect = section.getBoundingClientRect();
          return (
            rect.top + window.scrollY <= scrollPosition &&
            rect.bottom + window.scrollY > scrollPosition
          );
        });

        if (newIndex !== -1 && newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentIndex]);

  return (
    <section className="w-full flex items-center justify-center pt-16">
      <div className="flex min-[1200px]:flex-row flex-col justify-between w-full min-[1200px]:gap-0 gap-5 ">
        {/* Sticky StepProvider */}
        <div className=" bg-black sticky lg:top-[90px] top-[70px] py-4 min-[1200px]:basis-[22%] w-full min-[575px]:flex hidden ">
          <div className="sticky top-32 min-[1200px]:h-[90vh] h-auto min-[1200px]:w-3/4 w-full">
            {/* Adjust the `top` value if needed */}
            <StepProvider currentIndex={currentIndex} />
          </div>
        </div>

        {/* Scrolling Content */}
        <div className="min-[1200px]:basis-[78%] mt-3">
          <div ref={ref}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="min-w-full h-screen overflow-x-hidden "
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  scale: currentIndex === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <HowItWork
                  title={step.title}
                  description={step.description}
                  svg_icon_md={step.svg_icon_md}
                  svg_icon_sm={step.svg_icon_sm}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
