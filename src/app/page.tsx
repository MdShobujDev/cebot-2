import AMLComplianceCheck from "@/components/HomePage/AML/AMLComplianceCheck";
import ContactUs from "@/components/HomePage/contactUs/ContactUs";
import Header from "@/components/HomePage/Header";
import HowItWorks from "@/components/HomePage/HowItWork/HowItWorks";
import PrivacySecurity from "@/components/HomePage/PrivacyAndSecurity/PrivacySecurity";
import Services from "@/components/HomePage/services/Services";
import Support from "@/components/HomePage/Support/Support";
import Technology from "@/components/HomePage/Technology/Technology";

export default function Home() {
  return (
    <div>
      <Header />
      <HowItWorks />
      <PrivacySecurity />
      <Technology />
      <AMLComplianceCheck />
      <Support />
      <Services />
      <ContactUs />
    </div>
  );
}
