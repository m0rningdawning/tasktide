import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { Exo_2 } from "next/font/google";

const LogoFont = Exo_2({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Logo = ({ inHeader }: { inHeader: boolean }) => {
  return (
    <Link href="/">
      <div
        className={cn(
          "hover:opacity-75 transition items-center gap-x-2 hidden md:flex",
          LogoFont.className
        )}
      >
        <Image src="/logo.svg" alt="Logo" width={30} height={30} />
          {inHeader && <p className="text-lg text-neutral-700">TaskTide</p>}
      </div>
    </Link>
  );
};
