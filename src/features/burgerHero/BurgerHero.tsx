import { Input } from "@/components/ui/input";
import BurgerScene from "./BurgerScene";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import "./BurgerHero.css";

export default function BurgerHero() {
  return (
    <div className="w-full hero h-[60vh] bg-black relative">
      <BurgerScene />
      <div className="absolute bottom-0 w-full px-4 sm:px-0 mx-auto flex flex-col justify-center items-center py-20">
        <h2 className="text-5xl font-bold text-white centered">
          Find your perfect burger
        </h2>
        <div className="rounded-4 bg-[#262424] w-full sm:w-2/6 mt-8 flex flex-row justify-center items-center p-4 rounded rounded-md border border-[#31302F]">
          <div className="flex w-full max-w-2xl items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#DEBAAF]" />
              <Input
                type="search"
                placeholder="Search burger name"
                className="h-12 pl-10 text-[#DEBAAF] placeholder:text-[#DEBAAF] bg-[#1C1B1B] rounded rounded-sm border border-[#1C1B1B] focus:ring-1 focus:ring-primary focus:outline-none"
              />
            </div>

            <Button
              size="lg"
              className="h-12 px-8 bg-brand-light cursor-pointer text-white hover:bg-brand-light/90"
            >
              FIND
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
