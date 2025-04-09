import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between bg-gray-custom-one/80 backdrop-blur-xl border-b-[.5px] border-orange-custom py-3 px-4 items-center fixed top-0 left-0 right-0 z-50">
      <div className="flex gap-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={38} height={32} />
          <h2 className="text-gray-400 text-base">AI Interview Ninja</h2>
        </Link>
        <nav className="flex justify-center items-center">
          <ul className="flex gap-6">
            <ol>
              <Link
                href="/interviews"
                className="text-gray-400 hover:border-b-2 hover:border-gray-400"
              >
                Interviews
              </Link>
            </ol>
          </ul>
        </nav>
      </div>
      <div>
        <Link href="/sign-in" className="flex items-center gap-2 font-semibold px-2 py-1 hover:bg-gray-400 hover:text-background rounded-full transition-colors duration-200">
          <CircleUserRound /> Ingreso
        </Link>
      </div>
    </header>
  );
};

export default Header;

/**
 * <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
 */
