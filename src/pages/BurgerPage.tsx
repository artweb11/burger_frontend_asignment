// import './BurgerPage.css'

import { Badge } from "@/components/ui/badge";

function BurgerPage() {
  return (
    <>
      <div className="w-screen h-screen flex flex-row justify-center items-center bg-brand-dark">
        <h2 className="text-2xl font-bold text-brand-light">Burger</h2>
        <Badge>Feature is under development</Badge>
      </div>
    </>
  );
}

export default BurgerPage;
