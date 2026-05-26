// import './NearbyPage.css'

import { Badge } from "@/components/ui/badge";

function NearbyPage() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-brand-dark">
        <h2 className="text-2xl font-bold text-brand-light">
          Find restaurants near you
        </h2>
        <Badge>Coming Soon</Badge>
      </div>
    </>
  );
}

export default NearbyPage;
