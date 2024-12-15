import Insomnia from "@/../public/images/insomnia.png";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

function ContactUs() {
  return (
    <section className=" flex w-full ">
      <div
        className="sm:flex hidden flex-1 min-h-fit bg-no-repeat md:bg-right bg-center bg-cover "
        style={{
          backgroundImage: `url(${Insomnia.src})`,
        }}
      ></div>
      <div
        className=" w-full flex-1 flex  lg:px-20 sm:px-10 px-8 flex-col justify-center gap-5 py-10"
        style={{
          background:
            "linear-gradient(158.86deg, #030C14 14.57%, #060D32 47.39%, #030B1F 94.45%)",
        }}
      >
        <h1 className=" font-almarai font-light min-[1035px]:text-6xl min-[875px]:text-5xl sm:text-4xl text-3xl">
          Do you have any questions?
        </h1>
        <p className=" font-barlow font-light text-neutrals-dark-grey sm:text-base text-xs">
          {`Contact us, and we'll get back to you within a minute.`}
        </p>
        <PrimaryButton text="CONTACT US" href="/" />
      </div>
    </section>
  );
}

export default ContactUs;
