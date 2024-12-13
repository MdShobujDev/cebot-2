import Header from "@/components/HomePage/Header";
import HowItWorks from "@/components/HowItWork/HowItWorks";
import PrivacySecurity from "@/components/PrivacyAndSecurity/PrivacySecurity";
import Technology from "@/components/Technology/Technology";

export default function Home() {
  return (
    <div>
      <Header />
      <HowItWorks />
      <PrivacySecurity />
      <Technology />
      <div className=" bg-[#052542] h-20 w-full"></div>
    </div>
  );
}
