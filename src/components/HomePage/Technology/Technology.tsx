import technology from "@/../public/images/technology.svg";
import SecondaryButton from "../../Buttons/SecondaryButton";

function Technology() {
  return (
    <section className="  bg-[#052542] w-full">
      <div className="bg-[#3A47E1] w-full rounded-b-[50px] overflow-hidden">
        <div
          style={{
            background:
              "radial-gradient(43.11% 43.11% at 50% 50%, rgba(49, 189, 254, 0.5) 0%, rgba(58, 71, 225, 0.5) 100%)",
          }}
        >
          <div
            className="text-white md:py-24 py-14 pl-8 pr-8 min-[1030px]:pr-24 flex items-center justify-between bg-no-repeat bg-right bg-contain"
            style={{ backgroundImage: `url(${technology.src})` }}
          >
            <div className="flex flex-col lg:flex-[0_0_70%] gap-36">
              <div>
                <SecondaryButton
                  href="/"
                  textColor="#ffffff"
                  backgroundColor="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%)"
                />
                <h1 className=" font-almarai font-light sm:text-6xl text-3xl  mt-3 -tracking-[1px]">
                  Advanced Technology
                </h1>
              </div>
              <div className=" font-barlow">
                <p className=" sm:text-lg text-base font-medium">
                  Harness the power of cutting-edge technology with Cebot.{" "}
                </p>
                <p className=" font-light sm:text-base text-xs  mt-3">
                  Our platform allows you to bypass intermediaries, maintaining
                  full anonymity in your transactions. By minimizing third-party
                  involvement, we make it virtually impossible to trace the
                  origin or destination of any monetary transactions. We uphold
                  the original intent of digital currencies by preserving the
                  right to privacy they provide to users. Our innovative
                  solutions ensure that you can conduct your crypto activities
                  securely and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
