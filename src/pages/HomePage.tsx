// import './HomePage.css'

import BurgerHero from "@/features/burgerHero/BurgerHero";

function HomePage() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-start items-center bg-brand-dark">
        <BurgerHero />
      </div>
    </>
  );
}

export default HomePage;
