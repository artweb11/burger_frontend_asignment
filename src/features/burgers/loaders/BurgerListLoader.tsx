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
        // <Skeleton className="w-full bg-transparent" key={idx}>
        <Card className="group hover:bg-brand-dark3 transition-colors w-full bg-brand-dark2 cursor-pointer">
          <CardContent className="aspect-1/1 bg-transparent">
            <Skeleton className="aspect-1/1 bg-gray-700 rounded-none"></Skeleton>
          </CardContent>
          <CardHeader>
            <CardTitle className="bg-gray-700 min-h-8 text-white text-2xl">
              &nbsp;
            </CardTitle>
            <CardAction className="invisible">&nbsp;</CardAction>
          </CardHeader>
          <CardFooter className="flex flex-row gap-2 bg-transparent border-t-2 border-brand-dark">
            <Badge className="text-white bg-gray-700">
              <span className="invisible">Taste XX</span>
            </Badge>
            <Badge className="text-white bg-gray-700">
              <span className="invisible">Texture XX</span>
            </Badge>
            <Badge className="text-white bg-gray-700">
              <span className="invisible">Visual XX</span>
            </Badge>
          </CardFooter>
        </Card>
        // </Skeleton>
      ))}
    </>
  );
}
