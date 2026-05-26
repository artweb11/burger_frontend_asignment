import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function TopBurgerLoader() {
  return (
    <>
      {new Array(8).fill(0).map((_, idx) => (
        <Card
          className="group w-full bg-brand-dark2 cursor-pointer chrome"
          key={idx}
        >
          <CardContent className="aspect-16/9">
            <div className="w-full aspect-1/1 top-burger-image bg-gray-800" />
          </CardContent>
          <CardHeader>
            <CardTitle
              className="min-h-8 bg-gray-800 min-h-8 text-white text-2xl"
              aria-hidden="true"
            ></CardTitle>
            {/* <CardDescription className="min-h-[60px] bg-gray-800"></CardDescription> */}
            <CardAction></CardAction>
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
