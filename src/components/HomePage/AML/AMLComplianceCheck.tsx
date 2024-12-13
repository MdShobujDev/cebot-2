import AML from "@/../public/images/AML.svg";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import Image from "next/image";

function AMLComplianceCheck() {
  return (
    <section className=" bg-[#030C14] w-full">
      <div className=" bg-[#052542] w-full text-white px-24 pb-10 flex items-center justify-between rounded-b-[50px] gap-10 relative">
        <div className="flex flex-col flex-[0_0_60%] gap-36">
          <div>
            <SecondaryButton
              color="#ffffff"
              bgColor="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%)"
            />
            <h1 className=" font-almarai font-light text-6xl leading-[57px] mt-3 -tracking-[1px]">
              AML Compliance Check
            </h1>
          </div>
          <div className=" font-barlow">
            <p className="font-light">
              Stay compliant and secure with our integrated Anti-Money
              Laundering (AML) risk assessment tool. Cebot enables you to check
              any cryptocurrency address for AML risks, helping you avoid
              suspicious activities and ensuring that your transactions meet
              regulatory standards.
            </p>
            <p className=" font-medium text-lg  mt-3">
              This feature empowers you to conduct due diligence effortlessly,
              promoting transparency and trust in all your crypto dealings.
            </p>
          </div>
        </div>
        <div className=" ">
          <Image src={AML} alt="AML" width={350} />
        </div>
      </div>
    </section>
  );
}

export default AMLComplianceCheck;
