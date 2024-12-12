type SecondaryButtonProps = {
  color: string;
};

function SecondaryButton({ color }: SecondaryButtonProps) {
  return (
    <div
      className="font-almarai text-xl leading-5 w-48 h-16 rounded-[32.24px] cursor-pointer flex items-center justify-center border border-[#c1c4e7] "
      style={{
        background:
          "linear-gradient(180deg, rgba(58, 71, 225, 0) 0%, rgba(58, 71, 225, 0.5) 100%)",
        color: color,
      }}
    >
      How it Works
    </div>
  );
}

export default SecondaryButton;
