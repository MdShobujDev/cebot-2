import Insomnia from "@/../public/images/insomnia.png";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Image from "next/image";

function ContactUs() {
  return (
    <section className=" flex w-full">
      <div className=" flex-1">
        <Image src={Insomnia} alt="Insomnia" />
      </div>
      <div
        className=" w-full flex-1 flex  px-20 flex-col justify-center gap-5"
        style={{
          background:
            "linear-gradient(158.86deg, #030C14 14.57%, #060D32 47.39%, #030B1F 94.45%)",
        }}
      >
        <h1 className=" font-almarai font-light text-6xl">
          Do you have any questions?
        </h1>
        <p className=" font-barlow font-light text-neutrals-dark-grey">
          Contact us, and we'll get back to you within a minute.
        </p>
        <PrimaryButton text="CONTACT US" />
      </div>
    </section>
  );
}

export default ContactUs;
