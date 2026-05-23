import { NavLink, Outlet } from "react-router-dom";
import { routes } from "../router/routes";

export function AppLayout() {
  return (
    <div>
      <header className="h-14 border-b flex flex-row justify-start items-center">
        <div className="container">
          <NavLink
            to={routes.home}
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to={routes.burgers}
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold" : ""
            }
          >
            Burgers
          </NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
