"use client";

import AMLComplianceCheck from "@/components/HomePage/AML/AMLComplianceCheck";
import Header from "@/components/HomePage/Header";
import HowItWorks from "@/components/HomePage/HowItWork/HowItWorks";
import PrivacySecurity from "@/components/HomePage/PrivacyAndSecurity/PrivacySecurity";
import Support from "@/components/HomePage/Support/Support";
import Technology from "@/components/HomePage/Technology/Technology";
import ContactUs from "@/components/HomePage/contactUs/ContactUs";
import Services from "@/components/HomePage/services/Services";
import { useFollowPointer } from "@/utils/useFollowPointer";
import { motion, useScroll, useSpring } from "framer-motion";
import Head from "next/head";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const { x, y } = useFollowPointer(); // No ref needed anymore

  return (
    <motion.div className="relative">
      <Head>
        <title>Welcome to CEBOT Wallet</title>
        <meta name="description" content="This is an awesome page for SEO" />
      </Head>
      {/* Pointer Animation */}
      <motion.div
        className="lg:block hidden w-6 h-6 fixed z-50 top-8 left-8  rounded-full  bg-pink-500"
        style={{
          x,
          y,
        }}
      />

      {/* Scroll Progress Bar */}
      <motion.div
        className="sticky lg:top-[96px] top-[70px] left-0 right-0 h-[2px] z-50"
        style={{
          scaleX,
          transformOrigin: "0%",
          background:
            "linear-gradient(90deg, #E67EBE 20.68%, #539DE1 54.72%, #3A47E1 86.25%)",
        }}
      />
      {/* Sections */}
      <Header />
      <HowItWorks />
      <PrivacySecurity />
      <Technology />
      <AMLComplianceCheck />
      <Support />
      <Services />
      <ContactUs />
    </motion.div>
  );
}
