// import './BurgersPage.css'

import { useBurgers } from "@/hooks/useBurgers";

function BurgersPage() {
  const { data, isLoading, error } = useBurgers();

  if (isLoading) return <div>Loading burgers...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h2>Burgers</h2>

        {data?.map((burger) => (
          <div key={burger.id} className="border p-3 rounded">
            <div className="font-semibold">{burger.name}</div>
            <div>${burger.price}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BurgersPage;
