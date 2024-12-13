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
  };
  return (
    <section className=" w-full  flex items-center justify-center pt-16">
      <div className=" flex justify-between w-full ">
        <div className=" basis-[25%] h-[90vh]">
          <StepProvider handleCurrentIndex={handleCurrentIndex} />
        </div>
        <div className="basis-[75%] flex flex-col">
          <div className="min-w-full min-h-[90vh] ">
            <HowItWork
              title={steps[current].title}
              description={steps[current].description}
              image={steps[current].image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
