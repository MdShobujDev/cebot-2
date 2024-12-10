import Link from "next/link";

function Button() {
  return (
    <div>
      <Link
        href="/"
        className=" px-5 py-3 rounded-[50px] border border-neutrals-white font-medium"
      >
        START NOW
      </Link>
    </div>
  );
}

export default Button;
