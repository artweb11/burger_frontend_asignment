import ImageLoader from "@/components/common/ImageLoader";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Burger } from "@/types/Burger";
import { Link } from "react-router-dom";

export default function BurgerCard({ burger }: { burger: Burger }) {
  return (
    <Card
      className="group w-full bg-brand-dark2 cursor-pointer chrome"
      key={burger.id}
    >
      {/* <Link to={`/burgers/${burger.id}`} className="block"> */}
      <CardContent className="aspect-1/1">
        <ImageLoader
          className="w-full aspect-1/1"
          alt={burger.name}
          src={burger?.image}
        />
      </CardContent>
      <CardHeader>
        <CardTitle className="min-h-8 text-white text-2xl text-brand-yellow">
          {burger.name}
        </CardTitle>
        <CardDescription>{burger?.description}</CardDescription>
        <CardAction>{burger.price}</CardAction>
      </CardHeader>
      <CardFooter className="flex flex-row gap-2 bg-transparent border-t-2 border-brand-dark">
        <Badge className="text-white bg-gray-700">
          Taste <span className="text-brand-taste">9.8</span>
        </Badge>
        <Badge className="text-white bg-gray-700">
          Texture <span className="text-brand-texture">8.7</span>
        </Badge>
        <Badge className="text-white bg-gray-700">
          Visual <span className="text-brand-visual">9.2</span>
        </Badge>
      </CardFooter>
      {/* </Link> */}
    </Card>
  );
}
