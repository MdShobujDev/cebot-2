type SecondaryButtonProps = {
  color: string;
  bgColor: string;
};

function SecondaryButton({ color, bgColor }: SecondaryButtonProps) {
  return (
    <div
      className="font-almarai text-xl leading-5 w-48 h-16 rounded-[32.24px] cursor-pointer flex items-center justify-center border border-[#c1c4e7] "
      style={{
        background: bgColor,
        color: color,
      }}
    >
      How it Works
    </div>
  );
}

export default SecondaryButton;
