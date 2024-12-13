import AMLComplianceCheck from "@/components/HomePage/AML/AMLComplianceCheck";
import Header from "@/components/HomePage/Header";
import HowItWorks from "@/components/HomePage/HowItWork/HowItWorks";
import PrivacySecurity from "@/components/HomePage/PrivacyAndSecurity/PrivacySecurity";
import Technology from "@/components/HomePage/Technology/Technology";

export default function Home() {
  return (
    <div>
      <Header />
      <HowItWorks />
      <PrivacySecurity />
      <Technology />
      <AMLComplianceCheck />
      <div className=" bg-[#030C14] h-20 w-full"></div>
    </div>
  );
}
