import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "./button";

export function Pagination() {
  return (
    <>
      <Button
        variant="outline"
        className="cursor-pointer hover:bg-brand-light/80"
        size="icon"
        aria-label="Previous page"
      >
        <ArrowLeftIcon />
      </Button>
      <Button
        variant="outline"
        className="cursor-pointer bg-brand-light hover:bg-brand-light/80"
        size="icon"
        aria-label="Page 1"
      >
        1
      </Button>
      <Button
        variant="outline"
        className="cursor-pointer hover:bg-brand-light/80"
        size="icon"
        aria-label="Page 2"
      >
        2
      </Button>
      <Button
        variant="outline"
        className="cursor-pointer hover:bg-brand-light/80"
        size="icon"
        aria-label="Page 3"
      >
        3
      </Button>
      <Button
        variant="outline"
        className="cursor-pointer hover:bg-brand-light/80"
        size="icon"
        aria-label="Next page"
      >
        <ArrowRightIcon />
      </Button>
    </>
  );
}
