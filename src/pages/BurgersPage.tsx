// import './BurgersPage.css'

import ImageLoader from "@/components/common/ImageLoader";
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
import { useBurgers } from "@/hooks/useBurgers";

function BurgersPage() {
  const { data, isLoading, error } = useBurgers();

  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h2>Burgers</h2>
        <div className="w-full max-w-4xl flex flex-row justify-between items-center gap-2">
          {isLoading && (
            <>
              {[0, 1, 2].map((_, idx) => (
                <Skeleton className="w-full w-1/3" key={idx}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="invisible">&nbsp;</CardTitle>
                      <CardAction className="invisible">&nbsp;</CardAction>
                    </CardHeader>
                    <CardContent className="aspect-16/9 bg-gray-200"></CardContent>
                    <CardFooter className="flex-col gap-2">
                      <Skeleton className="w-full bg-gray-200 leading-8 h-full">
                        &nbsp;
                      </Skeleton>
                    </CardFooter>
                  </Card>
                </Skeleton>
              ))}
            </>
          )}

          {data?.map((burger) => (
            <Card className="w-full w-1/3" key={burger.id}>
              <CardHeader>
                <CardTitle>{burger.name}</CardTitle>
                <CardDescription>{burger?.description}</CardDescription>
                <CardAction>{burger.price}</CardAction>
              </CardHeader>
              <CardContent className="aspect-16/9">
                <ImageLoader
                  className="w-full aspect-16/9"
                  alt={burger.name}
                  src={burger?.image}
                />
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                  Visit
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default BurgersPage;
