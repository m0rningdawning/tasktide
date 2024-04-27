import Link from "next/link";
import { Logo } from "@/components/logo";
import { MiniLogo } from "@/components/minilogo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl flex mx-auto items-center w-full justify-between">
        <Logo inHeader={true} />
        <div className="space-x-3 md:w-auto flex items-center justify-between w-full">
          <Button className="bg-green-600 hover:bg-green-800" size="sm" asChild>
            <Link href="/signup">Get it now</Link>
          </Button>
          <MiniLogo />
          <Button
            className="outline outline-green-600 bg-neutral-50 text-neutral-850 hover:bg-green-600 hover:text-neutral-100 outline-2"
            size="sm"
            asChild
          >
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
