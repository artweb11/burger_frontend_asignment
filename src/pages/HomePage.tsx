// import './HomePage.css'

import BurgerTop from "@/components/burgerTop/BurgerTop";
import BurgerHero from "@/features/burgerHero/BurgerHero";

function HomePage() {
  return (
    <>
      <div className="w-screen min-h-screen flex flex-col justify-start items-center bg-brand-dark">
        <BurgerHero />
        <BurgerTop />
      </div>
    </>
  );
}

export default HomePage;
