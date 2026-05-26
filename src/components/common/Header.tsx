import { routes } from "@/app/router/routes";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full bg-brand-dark border-b border-brand-sep fixed top-0 z-[10000]">
      <div className="h-14 w-full px-4 sm:px-0 h-14 container mx-auto flex flex-row justify-between items-center">
        <div className="logo">
          <h1 className="text-xl font-bold text-brand-light hidden sm:block">
            Burger Frontend
          </h1>
          <h1 className="text-xl font-bold text-brand-light block sm:hidden">
            BF
          </h1>
        </div>
        <div className="mr-4">
          <NavLink
            to={routes.home}
            className={({ isActive }) =>
              isActive ? "text-brand-light mx-4" : "text-brand-lighter mx-4"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={routes.burgers}
            className={({ isActive }) =>
              isActive ? "text-brand-light mx-4" : "text-brand-lighter mx-4"
            }
          >
            Burgers
          </NavLink>

          <NavLink
            to={routes.nearby}
            className={({ isActive }) =>
              isActive ? "text-brand-light mx-4" : "text-brand-lighter mx-4"
            }
          >
            Nearby<span className="hidden md:inline"> spots</span>
          </NavLink>

          <NavLink
            to={routes.add}
            className={({ isActive }) =>
              isActive ? "text-brand-light mx-4" : "text-brand-lighter mx-4"
            }
          >
            Add <span className="hidden md:inline">yours</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
