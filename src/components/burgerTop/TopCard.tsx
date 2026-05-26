import { Link } from "react-router-dom";
import ImageLoader from "../common/ImageLoader";
import { Badge } from "../ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BurgerSpot } from "./BurgerSpot";
import type { TopBurger } from "@/types/TopBurger";

export default function TopCard({ burger }: { burger: TopBurger }) {
  return (
    <Link to={`/burgers/${burger.id}`}>
      <Card className="group w-full bg-brand-dark2 cursor-pointer chrome relative">
        <BurgerSpot spot={burger.spot} />
        <CardContent className="aspect-16/9">
          <ImageLoader
            className="w-full aspect-1/1 top-burger-image"
            alt={burger.name}
            src={burger.image}
          />
        </CardContent>
        <CardHeader>
          <CardTitle className="min-h-8 text-white text-2xl text-brand-yellow">
            {burger.name}
          </CardTitle>
          <CardDescription>{burger.description}</CardDescription>
          <CardAction></CardAction>
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
      </Card>
    </Link>
  );
}
