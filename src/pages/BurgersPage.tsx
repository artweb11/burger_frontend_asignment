import "./BurgersPage.css";

import { BurgerListLoader } from "@/features/burgers/loaders/BurgerListLoader";
import { useBurgers } from "@/hooks/useBurgers";
import { Pagination } from "@/components/ui/pagination";
import BurgerCard from "@/features/burgers/BurgerCard";

function BurgersPage() {
  const { data, isLoading, error } = useBurgers();

  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <div className="w-screen min-h-screen flex flex-col justify-center items-center">
        <div className="w-full px-4 sm:px-0 container my-8">
          <h2 className="text-2xl">Top Burgers</h2>
        </div>

        <div className="w-full px-4 sm:px-0 container mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {isLoading && <BurgerListLoader />}

          {data?.map((burger) => (
            <BurgerCard key={burger.id} burger={burger} />
          ))}
        </div>

        <div className="container px-4 sm:px-0 flex flex-row justify-start items-center mt-12 gap-2">
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default BurgersPage;
