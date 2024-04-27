import { Annoyed, Weight } from "lucide-react";
import Link from "next/link";
import { Exo_2 } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const PromoPageFont = Exo_2({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const PromoPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={cn("flex items-center justify-center flex-col md:max-w-screen-xl", PromoPageFont.className)}>
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-green-100 text-green-700 rounded-full">
          <Annoyed className="h-6 w-6 mr-2" />
          <span className="font-bold">Fairly ok, I guess</span>
        </div>
        <h1 className="text-3xl font-bold md:text-6xl text-center text-neutral-700 mb-6 ml-10 mr-10">
          TaskTide helps you manage your tasks and projects, once you buy a
          premium subscription, of course.
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Get started today!
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
        <p>
          If you&apos;re looking for a complex and very expensive way to manage your tasks
          and projects, TaskTide is the tool for you. With TaskTide, you can
          do half of what Trello can do and pay ten times more! Try it
          out today, or else...
        </p>
      </div>
      <Button
        className="mt-6 bg-green-600 hover:bg-green-800"
        size="lg"
        asChild
      >
        <Link href="/signup">Sign up now</Link>
      </Button>
    </div>
  );
};

export default PromoPage;
