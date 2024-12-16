"use client";
import Chart from "@/../public/images/Chart.svg";
import Ipad from "@/../public/images/Screen.png";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

function Support() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const titleIsInView = useInView(titleRef);
  const descriptionIsInView = useInView(descriptionRef);

  return (
    <section className=" bg-[#030C14] w-full overflow-hidden">
      <div className=" bg-[#030C14] w-full text-white md:py-24 py-14 pl-8 lg:pr-0 pr-8 flex   justify-between rounded-b-[50px] gap-16 relative ">
        <div
          className="flex flex-col min-[1200px]:flex-[0_0_45%] gap-36 bg-no-repeat bg-contain bg-center justify-between lg:!bg-none"
          style={{
            backgroundImage: `url(${Ipad.src})`,
          }}
        >
          <div>
            <div className=" max-w-max">
              <SecondaryButton
                href="/"
                textColor="#ffffff"
                backgroundColor="linear-gradient(180deg, rgba(58, 71, 225, 0) 0%, rgba(58, 71, 225, 0.5) 100%)"
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
              Support for Popular Assets
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
            className=" font-barlow"
          >
            <p className="font-light text-xs sm:text-base">
              {`Enjoy the flexibility of managing multiple cryptocurrencies all in
              one place. CEBOT supports a wide range of popular digital assets,
              allowing you to diversify your portfolio with ease. Whether you're
              dealing with Bitcoin (BTC), Ethereum (ETH), Tether (USDT - ERC-20,
              TRC-20), USD Coin (USDC), Binance Coin (BNB), Litecoin (LTC), Tron
              (TRX), Solana (SOL), or Toncoin (TON).`}
            </p>
            <p className=" font-medium sm:text-lg text-base  mt-3">
              Our platform provides a seamless and user-friendly experience to
              handle all your crypto transactions efficiently.
            </p>
          </motion.div>
        </div>
        <div
          className=" lg:block hidden rounded-3xl flex-[0_0_40%] relative"
          style={{
            boxShadow: "-90px -101px 135px -67px rgba(67,45,207,0.51)",
          }}
        >
          <Image src={Ipad} alt="Ipad" />

          <div className=" bg-white/20 p-3 rounded-xl backdrop-blur-md absolute min-[1200px]:bottom-14 bottom-0 min-[1200px]:-left-[120px] -left-[0px]">
            <h4 className=" font-barlow font-medium text-lg text-neutrals-dark-grey">
              Wallet
            </h4>
            <div className="flex">
              <h1 className=" font-almarai font-light text-[50px] leading-[1]">
                64.3
              </h1>
              <span>%</span>
            </div>
            <Image src={Chart} alt="Chart" width={180} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
