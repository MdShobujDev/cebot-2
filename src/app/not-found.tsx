import Link from "next/link";
import { MdOutlineKeyboardReturn } from "react-icons/md";

export default function NotFound() {
  return (
    <div className=" h-[80vh] flex items-center justify-center">
      <div>
        <h2>404 Not Found!</h2>
        <p>Could not find requested resource</p>
        <div className=" flex items-center gap-2 mt-2 text-secondary-purple">
          <MdOutlineKeyboardReturn size={25} />
          <Link href="/">Return Home</Link>
        </div>
      </div>
    </div>
  );
}
