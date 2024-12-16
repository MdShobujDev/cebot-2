"use client";
import AML from "@/../public/images/AML.svg";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

function AMLComplianceCheck() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const titleIsInView = useInView(titleRef);
  const descriptionIsInView = useInView(descriptionRef);

  return (
    <section className="bg-[#030C14] w-full overflow-hidden">
      <div className="bg-[#052542] w-full text-white pl-8 pr-8 lg:pr-24 flex items-center justify-between rounded-b-[50px] gap-10 relative">
        <div className="md:py-24 py-14 flex flex-col min-[1100px]:flex-[0_0_60%] gap-36">
          <header>
            <div className="max-w-max">
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
              className="font-almarai font-light sm:text-6xl text-3xl mt-3 -tracking-[1px]"
            >
              AML Compliance Check
            </motion.h1>
          </header>
          <motion.article
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
            className="font-barlow"
          >
            <p className="font-light sm:text-base text-xs">
              Stay compliant and secure with our integrated Anti-Money
              Laundering (AML) risk assessment tool. Cebot enables you to check
              any cryptocurrency address for AML risks, helping you avoid
              suspicious activities and ensuring that your transactions meet
              regulatory standards.
            </p>
            <p className="font-medium sm:text-lg text-base mt-3">
              This feature empowers you to conduct due diligence effortlessly,
              promoting transparency and trust in all your crypto dealings.
            </p>
          </motion.article>
        </div>
        <div className="py-10 self-center min-[1100px]:block hidden">
          <Image src={AML} alt="AML Compliance Illustration" width={350} />
        </div>
      </div>
    </section>
  );
}

export default AMLComplianceCheck;
