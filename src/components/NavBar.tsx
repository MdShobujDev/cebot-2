"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import Logo from "@/../public/logo/Blue.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "./Buttons/Button";

function NavBar() {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]
  );
  const height = useTransform(scrollY, [0, 100], [120, 60]);

  return (
    <motion.nav
      id="navigation"
      style={{
        background,
        height,
      }}
      className=" sticky top-0 font-barlow py-10 flex justify-between items-center z-20"
    >
      <div className="cursor-pointer ">
        <Link href="/">
          <Image src={Logo} alt="CEBOT" width={113} />
        </Link>
      </div>
      <div>
        <ul className=" flex items-center text-[15px] gap-10">
          <Link href="/">FUNCTIONALITY</Link>
          <Link href="/">DEPOSIT PROGRAM</Link>
          <Link href="/">LIMIT ORDERS</Link>
          <Link href="/">TUTORIALS</Link>
          <Link href="/">HELP</Link>
        </ul>
      </div>
      <div>
        <Button />
      </div>
    </motion.nav>
  );
}

export default NavBar;
