import Link from "next/link";

type PrimaryButtonProps = {
  text: string;
  href: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, href }) => {
  return (
    <div>
      <Link
        href={href}
        className="sm:px-5 sm:py-3 px-4 py-2 font-medium relative inline-block overflow-hidden rounded-[50px] uppercase sm:text-base text-sm"
        style={{
          border: "2px solid transparent",
          borderRadius: "50px",
          backgroundImage: `
            linear-gradient(black, black), 
            linear-gradient(90deg, #E67EBE 20.68%, #539DE1 54.72%, #3A47E1 86.25%)`,
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      >
        {text}
      </Link>
    </div>
  );
};

export default PrimaryButton;
