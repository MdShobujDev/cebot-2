import CEBOT_1 from "@/../public/images/services/CEBOT_1.png";
import CEBOT_2 from "@/../public/images/services/CEBOT_2.png";
import CEBOT_3 from "@/../public/images/services/CEBOT_3.png";
import CEBOT_4 from "@/../public/images/services/CEBOT_4.png";
import CEBOT_5 from "@/../public/images/services/CEBOT_5.png";
import icon_1 from "@/../public/images/services/icon_1.svg";
import icon_2 from "@/../public/images/services/icon_2.svg";
import icon_3 from "@/../public/images/services/icon_3.svg";
import icon_4 from "@/../public/images/services/icon_4.svg";
import icon_5 from "@/../public/images/services/icon_5.svg";

import Image from "next/image";

const items = [
  {
    id: 1,
    image: CEBOT_1,
    icon: icon_1,
    title: "Crypto Wallet",
    Descriptions:
      "With Cebot, you can easily send and receive cryptocurrencies to any address instantly through our non KYC exchange. Cebot also offers multiple wallets for each currency. You can create your own wallet in just a few clicks",
  },
  {
    id: 2,
    image: CEBOT_2,
    icon: icon_2,
    title: "Cryptocurrency Exchange",
    Descriptions: "Use this calculation form for your work.",
  },
  {
    id: 3,
    image: CEBOT_3,
    icon: icon_3,
    title: "Storage",
    Descriptions:
      "Store your cryptocurrency and multiply it. The CEBOT deposit program allows you to receive a fixed % of your BTC, ETH and USDT deposits.",
  },
  {
    id: 4,
    image: CEBOT_4,
    icon: icon_4,
    title: "AML compliance",
    Descriptions:
      "CEBOT upholds the highest standards of AML compliance; it allows you to check addresses for AML risks, ensuring a secure ecosystem for your cryptocurrency transactions. Also, you will get a report with a division into risk groups.",
  },
  {
    id: 5,
    image: CEBOT_5,
    icon: icon_5,
    title: "Autoconversion",
    Descriptions:
      "Experience seamless diversification with CEBOT's auto conversion tool, ensuring you receive the desired cryptocurrency effortlessly. Our platform ensures a swift and intuitive process and functionality.",
  },
];

type serviceProps = {
  index: number;
};

function Service({ index }: serviceProps) {
  return (
    <section className=" text-white">
      <div className=" flex items-center py-10 gap-10">
        <div className=" flex-[0_0_40%]">
          <Image src={items[index].image} alt="CEBOT_Image" />
        </div>
        <div className=" flex-[0_0_55%]">
          <div>
            <Image src={items[index].icon} alt="icon" />
          </div>
          <h2 className=" font-almarai font-bold text-[30px]">
            {items[index].title}
          </h2>
          <p className=" font-barlow font-light text-neutrals-dark-grey">
            {items[index].Descriptions}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Service;
