import Chart from "@/../public/images/Chart.svg";
import Ipad from "@/../public/images/Screen.png";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import Image from "next/image";

function Support() {
  return (
    <section className=" bg-[#030C14] w-full ">
      <div className=" bg-[#030C14] w-full text-white md:py-24 py-14 pl-8 lg:pr-0 pr-8 flex   justify-between rounded-b-[50px] gap-16 relative ">
        <div
          className="flex flex-col min-[1200px]:flex-[0_0_45%] gap-36 bg-no-repeat bg-contain bg-center justify-between lg:!bg-none"
          style={{
            backgroundImage: `url(${Ipad.src})`,
          }}
        >
          <div>
            <SecondaryButton
              href="/"
              textColor="#ffffff"
              backgroundColor="linear-gradient(180deg, rgba(58, 71, 225, 0) 0%, rgba(58, 71, 225, 0.5) 100%)"
            />
            <h1 className=" font-almarai font-light sm:text-6xl text-3xl  mt-3 -tracking-[1px]">
              Support for Popular Assets
            </h1>
          </div>
          <div className=" font-barlow">
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
          </div>
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
