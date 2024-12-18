import AMLComplianceCheck from "@/components/HomePage/AML/AMLComplianceCheck";
import ContactUs from "@/components/HomePage/contactUs/ContactUs";
import Header from "@/components/HomePage/Header";
import HowItWorks from "@/components/HomePage/HowItWork/HowItWorks";
import PrivacySecurity from "@/components/HomePage/PrivacyAndSecurity/PrivacySecurity";
import Services from "@/components/HomePage/services/Services";
import Support from "@/components/HomePage/Support/Support";
import Technology from "@/components/HomePage/Technology/Technology";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to CEBOT Wallet</title>
        <meta name="description" content="This is an awesome page for SEO" />
      </Head>
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
