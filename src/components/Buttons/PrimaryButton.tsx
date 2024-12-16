"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type PrimaryButtonProps = {
  text: string;
  href: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, href }) => {
  return (
    <motion.div
      whileHover={{
        scale: 0.92,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
        duration: 0.2,
      }}
    >
      <Link
        href={href}
        className="sm:px-5 sm:py-3 px-4 py-2 font-medium relative inline-block overflow-hidden rounded-[50px] uppercase sm:text-base text-sm"
        style={{
          border: "2px solid transparent",
          borderRadius: "50px",
          backgroundImage: `
            linear-gradient(black, black), 
            linear-gradient(90deg, #E67EBE 20.68%, #539DE1 54.72%, #3A47E1 86.25%)`,
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      >
        {text}
      </Link>
    </motion.div>
  );
};

export default PrimaryButton;
