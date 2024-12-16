"use client";
import image_1 from "@/../public/images/HowItWork/img_1.svg";
import image_2 from "@/../public/images/HowItWork/img_2.svg";
import image_3 from "@/../public/images/HowItWork/img_3.svg";
import image_4 from "@/../public/images/HowItWork/img_4.svg";
import { StaticImageData } from "next/image";
import { useState } from "react";
import HowItWork from "./HowItWork";
import StepProvider from "./StepProvider";

interface Step {
  title: string;
  description: string;
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
          className="min-[1200px]:basis-[22%] min-[575px]:static absolute top-32 min-[575px]:w-full w-1/2 min-[575px]:!bg-none min-[575px]:p-0 p-5 rounded-lg transition-all duration-200 ease-out 
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
