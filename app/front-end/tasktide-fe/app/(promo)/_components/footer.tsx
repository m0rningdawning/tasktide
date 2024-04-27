import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto items-center w-full justify-between">
        <div className="md:w-auto flex items-center justify-between w-full">
          <Button
            className="hover:bg-green-600"
            variant="ghost"
            size="sm"
          >
            Privacy Policy
          </Button>
          <Logo inHeader={false}/>
          <Button
            className="hover:bg-green-600"
            variant="ghost"
            size="sm"
          >
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
