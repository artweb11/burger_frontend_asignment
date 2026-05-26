import { useTopBurgers } from "@/hooks/useTopBurgers";
import TopCard from "./TopCard";
import "./BurgerTop.css";
import { TopBurgerLoader } from "@/features/burgers/loaders/TopBurgerLoader";

export default function BurgerTop() {
  const { data, isLoading, error } = useTopBurgers();

  if (error) return <div>Something went wrong</div>;

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start -m-24 z-10 pb-24">
      <div className="container mx-auto py-4">
        <h1 className="text-2xl font-bold text-brand-light">Top Burgers</h1>
      </div>
      <div className="container mx-auto">
        <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {isLoading ? <TopBurgerLoader /> : null}
          {data?.map((burger) => (
            <TopCard key={burger.id} burger={burger} />
          ))}
        </div>
      </div>
    </div>
  );
}
