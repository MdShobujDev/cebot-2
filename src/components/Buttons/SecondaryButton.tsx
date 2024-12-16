"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type SecondaryButtonProps = {
  textColor: string;
  backgroundColor: string;
  href: string;
};

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  textColor,
  backgroundColor,
  href,
}) => (
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
      className="font-almarai sm:text-xl text-sm leading-5 sm:w-48 sm:h-16 w-32 h-10 rounded-[32.24px] cursor-pointer flex items-center justify-center border border-[#c1c4e7]"
      style={{
        background: backgroundColor,
        color: textColor,
      }}
    >
      How it Works
    </Link>
  </motion.div>
);

export default SecondaryButton;
