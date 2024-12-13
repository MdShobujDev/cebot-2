import group_image from "@/../public/images/PrivacyAndSecurity/group_image.svg";
import Lock from "@/../public/images/PrivacyAndSecurity/lock.svg";
import Image from "next/image";
import SecondaryButton from "../../Buttons/SecondaryButton";

function PrivacySecurity() {
  return (
    <section className=" bg-[#3A47E1] w-full">
      <div className=" bg-[#E9E9E9] w-full text-black p-24 flex items-center justify-between rounded-b-[50px] gap-10 relative">
        <div className=" flex flex-col flex-1 gap-36 z-20">
          <div>
            <SecondaryButton
              color={"#3A47E1"}
              bgColor="linear-gradient(180deg, rgba(58, 71, 225, 0) 0%, rgba(58, 71, 225, 0.5) 100%)"
            />
            <h1 className=" font-almarai font-light text-6xl leading-[57px] mt-3 -tracking-[1px]">
              Privacy & Security
            </h1>
          </div>
          <div className=" font-barlow">
            <p className=" font-light">
              At Cebot, your privacy and the security of your digital assets are
              our top priorities. We provide you with a state-of-the-art wallet
              that features multiple layers of protection and encryption. Every
              coin that enters our system undergoes a rigorous process using
              advanced Artificial Intelligence to guarantee your anonymity and
              secure your transactions.
            </p>
            <p className=" font-medium text-lg text-[#1a1a1a] mt-3">
              With Cebot, you can confidently manage your cryptocurrencies,
              knowing that they are shielded from unauthorized access and cyber
              threats.
            </p>
          </div>
        </div>
        <div className=" relative z-10">
          <div>
            <Image src={Lock} alt="lock" />
          </div>
          <div
            className=" bg-white -z-10 w-96 h-96 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              boxShadow: " 200px -7px 174px -54px rgba(58,71,225,0.79)",
            }}
          ></div>
        </div>
        <div className="max-w-max z-10">
          <Image src={group_image} alt="group_image" width={400} />
        </div>
      </div>
    </section>
  );
}

export default PrivacySecurity;
