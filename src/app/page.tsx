import Header from "@/components/HomePage/Header";
import HowItWorks from "@/components/HowItWork/HowItWorks";
import PrivacySecurity from "@/components/PrivacyAndSecurity/PrivacySecurity";

export default function Home() {
  return (
    <div>
      <Header />
      <HowItWorks />
      <PrivacySecurity />
      <div className=" bg-[#3A47E1] h-20 w-full"></div>
    </div>
  );
}
