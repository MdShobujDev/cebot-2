"use client";
import Image_1 from "@/../public/images/HowItWork/img_2.svg";
import Image_2 from "@/../public/images/HowItWork/img_3.svg";
import {
  default as Image_3,
  default as Image_4,
} from "@/../public/images/HowItWork/img_4.svg";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import HowItWork from "./HowItWork";
import { SVG_1, SVG_2, SVG_3, SVG_4 } from "./Icons";
import StepProvider from "./StepProvider";

interface Step {
  title: string;
  description: string;
  svg_icon: React.ReactNode;
  image: StaticImageData;
}
function HowItWorks() {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const steps: Step[] = [
    {
      title: "Automated Crypto Reception",
      description:
        "As cryptocurrencies are received, they're instantly deposited into your CEBOT Exchange account.",
      svg_icon: <SVG_1 />,
      image: Image_1,
    },
    {
      title: "Customizable Conversion Rules",
      description:
        "Set your preferred conversion parameters in advance. Choose which incoming cryptocurrencies you want to auto-convert and specify the target coins.",
      svg_icon: <SVG_2 />,
      image: Image_2,
    },
    {
      title: "Seamless Asset Transition",
      description:
        "Our system follows your instructions precisely, automatically converting and redirecting funds to your selected supported coins.",
      svg_icon: <SVG_3 />,
      image: Image_3,
    },
    {
      title: "Efficient Portfolio Management",
      description:
        "Simplify transactions and manage your assets effortlessly through our streamlined and automated process.",
      svg_icon: <SVG_4 />,
      image: Image_4,
    },
  ];

  const handleCurrentIndex = (current: number) => {
    setCurrent(current);
    setIsOpen((prev) => !prev);
  };
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className=" w-full flex items-center justify-center pt-16 pb-10 relative overflow-x-hidden">
      <div className="flex min-[1200px]:flex-row flex-col justify-between w-full min-[1200px]:gap-0 gap-7">
        <div
          className="min-[1200px]:basis-[22%] min-[575px]:static absolute top-32 min-[575px]:w-full w-1/2 min-[575px]:!bg-none min-[575px]:p-0 p-5 rounded-lg transition-all duration-200 ease-out z-20 
        "
          style={{
            background:
              "linear-gradient(158.86deg, #030C14 14.57%, #060D32 47.39%, #030B1F 94.45%)",
            left: isOpen ? "-300px" : "0px",
          }}
        >
          <StepProvider handleCurrentIndex={handleCurrentIndex} />
        </div>

        <div className="min-[1200px]:basis-[78%]">
          <div className="min-w-full">
            <HowItWork
              title={steps[current].title}
              description={steps[current].description}
              svg_icon={steps[current].svg_icon}
              image={steps[current].image}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
