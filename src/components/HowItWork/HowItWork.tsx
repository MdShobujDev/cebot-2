import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import SecondaryButton from "../Buttons/SecondaryButton";

type PropsType = {
  title: string;
  description: string;
  image: StaticImageData;
};

function HowItWork({ title, description, image }: PropsType) {
  return (
    <motion.div
      key={`${title}-${description}-${image.src}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2, ease: "linear" }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="flex gap-4"
    >
      <div className="flex-1 w-full flex flex-col gap-5">
        <SecondaryButton
          color="#fff"
          bgColor="linear-gradient(180deg, rgba(58, 71, 225, 0) 0%, rgba(58, 71, 225, 0.5) 100%)"
        />
        <h1 className="font-almarai font-light text-6xl -tracking-[1px]">
          {title}
        </h1>
        <p className="font-barlow font-light text-[#DEDEDE]">{description}</p>
      </div>
      <div className="flex-1 h-[462px] max-w-max  flex items-center justify-center  rounded overflow-hidden">
        <Image src={image} alt="image_1" />
      </div>
    </motion.div>
  );
}

export default HowItWork;
