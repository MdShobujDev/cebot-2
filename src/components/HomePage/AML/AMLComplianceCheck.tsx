import AML from "@/../public/images/AML.svg";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import Image from "next/image";

function AMLComplianceCheck() {
  return (
    <section className="bg-[#030C14] w-full">
      <div className="bg-[#052542] w-full text-white pl-8 pr-8 lg:pr-24 flex items-center justify-between rounded-b-[50px] gap-10 relative">
        <div className="md:py-24 py-14 flex flex-col min-[1100px]:flex-[0_0_60%] gap-36">
          <header>
            <SecondaryButton
              href="/"
              textColor="#ffffff"
              backgroundColor="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%)"
            />
            <h1 className="font-almarai font-light sm:text-6xl text-3xl mt-3 -tracking-[1px]">
              AML Compliance Check
            </h1>
          </header>
          <article className="font-barlow">
            <p className="font-light sm:text-base text-xs">
              Stay compliant and secure with our integrated Anti-Money
              Laundering (AML) risk assessment tool. Cebot enables you to check
              any cryptocurrency address for AML risks, helping you avoid
              suspicious activities and ensuring that your transactions meet
              regulatory standards.
            </p>
            <p className="font-medium sm:text-lg text-base mt-3">
              This feature empowers you to conduct due diligence effortlessly,
              promoting transparency and trust in all your crypto dealings.
            </p>
          </article>
        </div>
        <div className="py-10 self-center min-[1100px]:block hidden">
          <Image src={AML} alt="AML Compliance Illustration" width={350} />
        </div>
      </div>
    </section>
  );
}

export default AMLComplianceCheck;
