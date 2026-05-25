import "./BurgersPage.css";

import ImageLoader from "@/components/common/ImageLoader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BurgerListLoader } from "@/features/burgers/loaders/BurgerListLoader";
import { useBurgers } from "@/hooks/useBurgers";

function BurgersPage() {
  const { data, isLoading, error } = useBurgers();

  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <div className="w-screen min-h-screen flex flex-col justify-center items-center">
        <div className="w-full container my-8">
          <h2 className="text-2xl">Top Burgers</h2>
        </div>

        <div className="w-full container mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {isLoading && <BurgerListLoader />}

          {data?.map((burger) => (
            <Card
              className="group w-full bg-brand-dark2 cursor-pointer chrome"
              key={burger.id}
            >
              <CardContent className="aspect-16/9">
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
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default BurgersPage;
