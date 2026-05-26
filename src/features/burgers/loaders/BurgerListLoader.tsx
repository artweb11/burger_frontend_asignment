import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function BurgerListLoader() {
  return (
    <>
      {new Array(6).fill(0).map((_, idx) => (
        <Card
          className="group hover:bg-brand-dark2 transition-colors w-full bg-brand-dark cursor-pointer"
          key={idx}
        >
          <CardContent className="aspect-1/1 bg-transparent">
            <Skeleton className="aspect-1/1 bg-gray-800 rounded-none"></Skeleton>
          </CardContent>
          <CardHeader>
            <CardTitle className="bg-gray-800 min-h-8 text-white text-2xl">
              &nbsp;
            </CardTitle>
            <CardAction className="invisible">&nbsp;</CardAction>
          </CardHeader>
          <CardFooter className="flex flex-row gap-2 bg-transparent border-t-2 border-brand-dark">
            <Badge className="text-white bg-gray-800">
              <span className="invisible" aria-hidden="true">
                Taste XX
              </span>
            </Badge>
            <Badge className="text-white bg-gray-800">
              <span className="invisible" aria-hidden="true">
                Texture XX
              </span>
            </Badge>
            <Badge className="text-white bg-gray-800">
              <span className="invisible" aria-hidden="true">
                Visual XX
              </span>
            </Badge>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
