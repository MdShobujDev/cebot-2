"use client";
import CEBOT_1 from "@/../public/images/services/CEBOT_1.png";
import CEBOT_2 from "@/../public/images/services/CEBOT_2.png";
import CEBOT_3 from "@/../public/images/services/CEBOT_3.png";
import CEBOT_4 from "@/../public/images/services/CEBOT_4.png";
import CEBOT_5 from "@/../public/images/services/CEBOT_5.png";
import icon_1 from "@/../public/images/services/icon_1.svg";
import icon_2 from "@/../public/images/services/icon_2.svg";
import icon_3 from "@/../public/images/services/icon_3.svg";
import icon_4 from "@/../public/images/services/icon_4.svg";
import icon_5 from "@/../public/images/services/icon_5.svg";
import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

// Define the structure for each item in the list
type ServiceItem = {
  id: number;
  image: StaticImageData;
  icon: StaticImageData;
  title: string;
  Descriptions: string;
};

// Array of service items
const items: ServiceItem[] = [
  {
    id: 1,
    image: CEBOT_1,
    icon: icon_1,
    title: "Crypto Wallet",
    Descriptions:
      "With Cebot, you can easily send and receive cryptocurrencies to any address instantly through our non KYC exchange. Cebot also offers multiple wallets for each currency. You can create your own wallet in just a few clicks",
  },
  {
    id: 2,
    image: CEBOT_2,
    icon: icon_2,
    title: "Cryptocurrency Exchange",
    Descriptions: "Use this calculation form for your work.",
  },
  {
    id: 3,
    image: CEBOT_3,
    icon: icon_3,
    title: "Storage",
    Descriptions:
      "Store your cryptocurrency and multiply it. The CEBOT deposit program allows you to receive a fixed % of your BTC, ETH and USDT deposits.",
  },
  {
    id: 4,
    image: CEBOT_4,
    icon: icon_4,
    title: "AML compliance",
    Descriptions:
      "CEBOT upholds the highest standards of AML compliance; it allows you to check addresses for AML risks, ensuring a secure ecosystem for your cryptocurrency transactions. Also, you will get a report with a division into risk groups.",
  },
  {
    id: 5,
    image: CEBOT_5,
    icon: icon_5,
    title: "Autoconversion",
    Descriptions:
      "Experience seamless diversification with CEBOT's auto conversion tool, ensuring you receive the desired cryptocurrency effortlessly. Our platform ensures a swift and intuitive process and functionality.",
  },
];

// Define props type
type ServiceProps = {
  index: number;
};

const Service = ({ index }: ServiceProps) => {
  const item = items[index];
  const ref = useRef(null);
  const isInView = useInView(ref);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <section className="text-white overflow-hidden">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex items-center py-10 gap-10"
      >
        {/* Left Section with Image */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.7,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            duration: 0.3,
          }}
          className="flex-[0_0_40%] min-[520px]:block hidden"
        >
          <Image src={item.image} alt="CEBOT_Image" />
        </motion.div>

        {/* Right Section with Content */}
        <div className="min-[520px]:flex-[0_0_55%]">
          <div className="flex gap-2 min-[520px]:flex-col flex-row min-[520px]:items-start items-center justify-center w-full ">
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : 40,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                duration: 0.3,
                delay: 0.08,
              }}
              className="md:w-full"
            >
              <div className="w-10">
                <Image src={item.icon} alt="icon" />
              </div>
            </motion.div>
            <motion.h2
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : 40,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                duration: 0.3,
                delay: 0.15,
              }}
              className="font-almarai font-bold sm:text-3xl text-xl "
            >
              {item.title}
            </motion.h2>
          </div>

          {/* Mobile View Image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              scale: isInView ? 1 : 0.7,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              duration: 0.3,
            }}
            className="flex min-[520px]:hidden mt-2"
          >
            <Image src={item.image} alt="CEBOT_Image" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? 0 : 40,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              duration: 0.3,
              delay: 0.2,
            }}
            className="text-center min-[520px]:text-start font-barlow font-light text-neutrals-dark-grey sm:text-base text-xs"
          >
            {item.Descriptions}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Service;
