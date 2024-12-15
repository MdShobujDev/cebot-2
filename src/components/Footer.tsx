import Logo from "@/../public/logo/Blue.svg";
import Image from "next/image";
import Link from "next/link";

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

const Footer: React.FC = () => {
  return (
    <footer className="font-barlow pt-16 pb-14 px-2">
      {/* Top Section */}
      <div className="flex flex-col min-[800px]:flex-row min-[800px]:items-center gap-5 justify-between border-b-[0.5px] pb-5">
        {/* Logo */}
        <div className="cursor-pointer">
          <Link href="/">
            <Image src={Logo} alt="CEBOT" width={113} />
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex items-center font-light gap-5 flex-wrap">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="hover:text-primary-blue transition-all duration-200 ease-linear"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-[11px] font-light flex flex-col min-[730px]:flex-row min-[730px]:items-center justify-between text-neutrals-dark-grey mt-5 gap-5">
        {/* Description */}
        <p>
          CEBOT Crypto Exchange Bot allows secure buying and selling of <br />
          cryptocurrencies, including BTC, USDT, USDC, ETH, LTC, BNB, TRX, and
          more.
        </p>

        {/* Copyright Information */}
        <p>
          © Copyright 2021 CEBOT Inc. All rights reserved. <br />
          <Link href="/privacy-policy">Privacy Policy</Link> |{" "}
          <Link href="/terms-of-use">Terms of Use</Link> |{" "}
          <Link href="mailto:info@cebot.io">info@cebot.io</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
