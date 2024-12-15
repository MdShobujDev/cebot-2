import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaListUl } from "react-icons/fa6";
import SecondaryButton from "../../Buttons/SecondaryButton";

type PropsType = {
  title: string;
  description: string;
  image: StaticImageData;
  handleClick: () => void;
};

const HowItWork = ({ title, description, image, handleClick }: PropsType) => {
  return (
    <motion.div
      key={`${title}-${description}-${image.src}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2, ease: "linear" }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="flex gap-4 min-[850px]:p-0 p-4 bg-no-repeat bg-center h-[75vh] min-[850px]:h-auto bg-cover min-[850px]:!bg-none pb-10"
      style={{
        backgroundImage: `url(${image.src})`,
      }}
    >
      {/* Left Section */}
      <div className="flex-1 w-full flex flex-col gap-5 min-[850px]:justify-normal justify-between">
        <div>
          <div className="flex items-center justify-between">
            <button onClick={handleClick} className="min-[575px]:hidden block">
              <FaListUl size={22} />
            </button>
            <div>
              <SecondaryButton
                href="/"
                textColor="#fff"
                backgroundColor="linear-gradient(180deg, rgba(58, 71, 225, 0) 0%, rgba(58, 71, 225, 0.5) 100%)"
              />
            </div>
          </div>
          <h1 className="mt-5 font-almarai font-light sm:text-5xl text-3xl -tracking-[1px] min-[575px]:text-start text-center">
            {title}
          </h1>
        </div>

        <p className="font-barlow sm:text-base text-xs font-light text-[#DEDEDE] min-[575px]:text-start text-center">
          {description}
        </p>
      </div>

      {/* Right Section: Image */}
      <div className="min-[850px]:flex hidden flex-1 h-[462px] max-w-max items-center justify-center rounded overflow-hidden">
        <Image src={image} alt="How it Works" />
      </div>
    </motion.div>
  );
};

export default HowItWork;
