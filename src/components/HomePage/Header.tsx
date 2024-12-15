import Abstract2g from "@/../public/images/abstract2g.png";
import { IoPlayCircleOutline } from "react-icons/io5";
import Button from "../Buttons/PrimaryButton";

function Header() {
  return (
    <header className="pb-10">
      <div
        className="md:h-[90vh] sm:h-[80vh] h-[70vh]  bg-contain bg-no-repeat bg-center font-almarai font-light flex flex-col justify-center items-center uppercase -tracking-[2px] px-5 gap-5 min-[1250px]:px-28 min-[900px]:px-20 text-4xl min-[1250px]:text-8xl sm:text-7xl min-[530px]:text-6xl min-[385px]:text-5xl"
        style={{ backgroundImage: `url(${Abstract2g.src})` }}
      >
        <h1 className="self-start">
          Optimize Your <br /> Crypto Holdings
        </h1>
        <h1 className="self-start min-[920px]:self-end min-[920px]:text-white text-primary-blue">
          with Automated <br /> conversions
        </h1>
      </div>
      <div className=" font-barlow">
        <div
          className=" leading-7 pb-7"
          style={{
            borderBottom: "2.99px solid",
            borderImageSource:
              "linear-gradient(90deg, #E67EBE 20.68%, #539DE1 54.72%, #3A47E1 86.25%)",
            borderImageSlice: 1,
          }}
        >
          <h3 className=" font-light sm:text-[25px] text-[18px] -tracking-[.5px] text-neutrals-light-grey min-[520px]:text-[28px]">
            Streamline your Portfolio with
          </h3>
          <h3 className=" font-semibold italic text-[20px] sm:text-[28px]">
            CEBOTs Automatic Conversion Feature
          </h3>
        </div>
        <div className=" mt-5 flex items-start">
          <div className=" min-[550px]:flex flex-1 hidden items-center gap-2 text-primary-lilac cursor-pointer">
            <div className=" text-[40px]">
              <IoPlayCircleOutline />
            </div>
            <span className=" font-bold">Play Reel</span>
          </div>
          <div className=" flex-1 flex flex-col gap-10">
            <p className="font-light sm:text-base text-xs text-neutrals-light-grey">
              Take control of your cryptocurrency portfolio like a pro. With
              CEBOTs Automatic Conversions, you can effortlessly convert
              incoming cryptocurrencies into any other supported coins,
              including stablecoins, enhancing your asset management strategy.
            </p>
            <div className="flex gap-4 items-center justify-between">
              <div className=" min-[550px]:hidden flex items-center gap-2 text-primary-lilac cursor-pointer">
                <div className=" text-[40px]">
                  <IoPlayCircleOutline />
                </div>
                <span className=" font-bold">Play Reel</span>
              </div>
              <Button text="START NOW" href="/" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
