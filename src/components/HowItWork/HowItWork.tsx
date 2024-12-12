import Image, { StaticImageData } from "next/image";
import SecondaryButton from "../Buttons/SecondaryButton";

type Section1Props = {
  title: string;
  description: string;
  image: StaticImageData;
};

function HowItWork({ title, description, image }: Section1Props) {
  return (
    <div className="flex gap-4">
      <div className="flex-1 w-full flex flex-col gap-5">
        <SecondaryButton />
        <h1 className="font-almarai font-light text-6xl -tracking-[1px]">
          {title}
        </h1>
        <p className="font-barlow font-light text-[#DEDEDE]">{description}</p>
      </div>
      <div className="flex-1 h-[462px] max-w-max  flex items-center justify-center  rounded overflow-hidden">
        <Image src={image} alt="image_1" />
      </div>
    </div>
  );
}

export default HowItWork;
