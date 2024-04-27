import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { Exo_2 } from "next/font/google";

const LogoFont = Exo_2({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const MiniLogo = () => {
  return (
    <Link href="/">
      <div
        className={cn(
          "hover:opacity-75 transition items-center gap-x-2 fkex md:hidden",
          LogoFont.className
        )}
      >
        <Image className="visible md:hidden" src="/logo.svg" alt="Logo" width={30} height={30} />
      </div>
    </Link>
  );
};