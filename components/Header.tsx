import Image from "next/image";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";
import { isAuthenticated } from "@/lib/actions/authSupabase.action";

const Header = async () => {
  const { isUsersAuthenticated, user } = await isAuthenticated();
  return (
    <header className="flex justify-between bg-gray-custom-one/80 backdrop-blur-xl border-b-[.5px] border-orange-custom py-3 px-4 items-center fixed top-0 left-0 right-0 z-50">
      <div className="flex gap-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={38} height={32} />
          <h2 className="text-gray-400 text-base">AI Interview Ninja</h2>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <div>
          {isUsersAuthenticated ? (
            <Link
              href={`/${user?.id}`}
              className="rounded-full border-1 border-gray-custom-three px-4 py-1 font-mono text-gray-400 hover:bg-orange-custom/30 hover:text-orange-custom transition-colors duration-200"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/sign-in"
              className="flex items-center gap-2 font-mono px-2 py-1 hover:bg-orange-custom/30 hover:text-orange-custom rounded-full transition-colors duration-200"
            >
              <CircleUserRound className="text-orange-custom" /> Ingreso
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
