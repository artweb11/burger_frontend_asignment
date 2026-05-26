import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import { AppLayout } from "../layouts/AppLayout";
import BurgersPage from "@/pages/BurgersPage";
import { routes } from "./routes";
import AddPage from "@/pages/AddPage";
import NearbyPage from "@/pages/NearbyPage";
import BurgerPage from "@/pages/BurgerPage";

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <AppLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: routes.burgers,
    element: <AppLayout />,
    children: [{ index: true, element: <BurgersPage /> }],
  },
  {
    path: routes.nearby,
    element: <AppLayout />,
    children: [{ index: true, element: <NearbyPage /> }],
  },
  {
    path: routes.add,
    element: <AppLayout />,
    children: [{ index: true, element: <AddPage /> }],
  },
  {
    path: routes.burger,
    element: <AppLayout />,
    children: [{ index: true, element: <BurgerPage /> }],
  },
]);
