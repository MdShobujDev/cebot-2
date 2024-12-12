import Header from "@/components/HomePage/Header";
import HowItWorks from "@/components/HowItWork/HowItWorks";

export default function Home() {
  return (
    <div>
      <Header />
      <HowItWorks />
      <div className=" flex items-center bg-slate-400 h-screen">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
        perferendis sit cupiditate voluptate architecto, hic et quibusdam harum
        provident aliquam fuga magni odit illum labore, animi consectetur nobis
        velit rerum.
      </div>
    </div>
  );
}
