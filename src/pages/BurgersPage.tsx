import "./BurgersPage.css";

import { BurgerListLoader } from "@/features/burgers/loaders/BurgerListLoader";
import { useBurgers } from "@/hooks/useBurgers";
import { Pagination } from "@/components/ui/pagination";
import BurgerCard from "@/features/burgers/BurgerCard";

function BurgersPage() {
  const { data, isLoading, error } = useBurgers();

  if (error) {
    console.error("Failed to load burgers:", error);
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <div className="text-red-600">Failed to load burgers</div>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      <div className="w-full px-4 sm:px-0 container my-8">
        <h2 className="text-2xl">Top Burgers</h2>
      </div>

      <div
        className="w-full px-4 sm:px-0 container mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-8 auto-rows-fr"
        aria-busy={isLoading}
        aria-label="Burger listings"
      >
        {isLoading && <BurgerListLoader />}

        {data?.map((burger) => (
          <BurgerCard key={burger.id} burger={burger} />
        ))}
        {!isLoading && data?.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500">
            No burgers found.
          </div>
        )}
      </div>

      <div className="container px-4 sm:px-0 flex flex-row justify-start items-center mt-12 gap-2">
        <Pagination />
      </div>
    </div>
  );
}

export default BurgersPage;
