export function BurgerSpot({ spot }: { spot: number }) {
  return (
    <div className="absolute top-0 right-0 z-10 w-24 h-24 flex items-center justify-center overflow-hidden">
      <div
        className="absolute -top-4 -right-12 w-32 h-16 flex justify-center items-center bg-brand-yellow"
        style={{ transformOrigin: "50% 50%", transform: "rotate(45deg)" }}
      ></div>
      <div className="absolute top-0 right-0 w-10 h-10 text-black font-bold text-3xl px-2 py-1">
        {spot}
      </div>
    </div>
  );
}
