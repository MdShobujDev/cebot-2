"use client";

import Logo from "@/../public/logo/Blue.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import PrimaryButton from "./Buttons/PrimaryButton";

interface NavItem {
  id: number;
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 1, name: "FUNCTIONALITY", href: "/" },
  { id: 2, name: "DEPOSIT PROGRAM", href: "/" },
  { id: 3, name: "LIMIT ORDERS", href: "/" },
  { id: 4, name: "TUTORIALS", href: "/" },
  { id: 5, name: "HELP", href: "/" },
];

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 font-barlow py-5 flex justify-between items-center z-50 bg-black bg-opacity-70 backdrop-blur-lg">
      {/* Logo */}
      <div className="cursor-pointer">
        <Link href="/">
          <Image src={Logo} alt="CEBOT" width={113} />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center text-[15px] gap-10">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="hover:text-primary-blue transition-all duration-200 ease-linear"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Desktop Button */}
      <div className="hidden lg:block">
        <PrimaryButton text="START NOW" href="/" />
      </div>

      {/* Mobile Menu Toggle */}
      <div onClick={toggleMenu} className="lg:hidden pr-2 block cursor-pointer">
        {isMenuOpen ? <FaXmark size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            duration: 0.1,
            ease: "linear",
            type: "spring",
            stiffness: 50,
          }}
          className="lg:hidden absolute right-0 top-[70px] md:w-1/2 w-full rounded-bl-2xl"
          style={{
            background:
              "linear-gradient(158.86deg, #030C14 14.57%, #060D32 47.39%, #030B1F 94.45%)",
          }}
        >
          <div className="flex flex-col justify-between text-[15px] px-10 py-10 gap-5 w-full">
            {/* Mobile Menu Items */}
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={toggleMenu}
                  className="hover:bg-primary-indigo/15 rounded-lg py-4 px-3 transition-all ease-linear duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Button */}
            <div onClick={toggleMenu} className=" max-w-max">
              <PrimaryButton text="START NOW" href="/" />
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
