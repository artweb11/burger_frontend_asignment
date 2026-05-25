import { routes } from "@/app/router/routes";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="border-b">
      <div className="h-14 w-full h-14 container mx-auto flex flex-row justify-between items-center">
        <div className="logo">
          <h1 className="text-xl">Burger Frontend</h1>
        </div>
        <div className="mr-4">
          <NavLink
            to={routes.home}
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold mx-4" : "mx-4"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={routes.burgers}
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold mx-4" : "mx-4"
            }
          >
            Burgers
          </NavLink>

          <NavLink
            to={routes.add}
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold mx-4" : "mx-4"
            }
          >
            Add yours
          </NavLink>
        </div>
      </div>
    </header>
  );
}
