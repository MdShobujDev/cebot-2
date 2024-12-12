import Abstract2g from "@/../public/images/abstract2g.png";
import { IoPlayCircleOutline } from "react-icons/io5";
import Button from "../Buttons/Button";

function Header() {
  return (
    <header className=" pb-10">
      <div
        className="h-[90vh] bg-contain bg-no-repeat bg-center font-almarai font-light text-8xl flex flex-col justify-center items-center uppercase -tracking-[2px] px-28 gap-5"
        style={{ backgroundImage: `url(${Abstract2g.src})` }}
      >
        <h1 className="self-start">
          Optimize Your <br /> Crypto Holdings
        </h1>
        <h1 className="self-end">
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
          <h3 className=" font-light text-[28px] -tracking-[.5px] text-neutrals-light-grey">
            Streamline your Portfolio with
          </h3>
          <h3 className=" font-semibold italic text-[28px]">
            CEBOTs Automatic Conversion Feature
          </h3>
        </div>
        <div className=" mt-5 flex items-start">
          <div className=" flex-1 flex items-center gap-2 text-primary-lilac cursor-pointer">
            <div className=" text-[40px]">
              <IoPlayCircleOutline />
            </div>
            <span className=" font-bold">Play Reel</span>
          </div>
          <div className=" flex-1 flex flex-col gap-10">
            <p className=" font-light text-neutrals-light-grey">
              Take control of your cryptocurrency portfolio like a pro. With
              CEBOTs Automatic Conversions, you can effortlessly convert
              incoming cryptocurrencies into any other supported coins,
              including stablecoins, enhancing your asset management strategy.
            </p>
            <Button />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
