import Logo from "@/../public/logo/Blue.svg";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" font-barlow pt-16 pb-14 ">
      <div className=" flex items-center justify-between border-b-[0.5px] pb-5">
        <div className="  cursor-pointer">
          <Link href="/">
            <Image src={Logo} alt="CEBOT" width={113} />
          </Link>
        </div>
        <div>
          <ul className=" flex items-center font-light gap-5">
            <Link href="/">FUNCTIONALITY</Link>
            <Link href="/">DEPOSIT PROGRAM</Link>
            <Link href="/">LIMIT ORDERS</Link>
            <Link href="/">TUTORIALS</Link>
            <Link href="/">HELP</Link>
          </ul>
        </div>
      </div>
      <div className=" text-[11px] font-light flex items-center justify-between text-neutrals-dark-grey mt-5">
        <p>
          CEBOT Crypto Exchange Bot allows secure buying and selling of <br />{" "}
          cryptocurrencies, including BTC, USDT, USDC, ETH, LTC, BNB, TRX and
          more
        </p>
        <p>
          © Copyright 2021 CEBOT Inc. All rights reserved. <br />
          Privacy Policy | Terms of Use | info@cebot.io
        </p>
      </div>
    </footer>
  );
}

export default Footer;
