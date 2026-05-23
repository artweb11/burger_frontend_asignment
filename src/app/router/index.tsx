import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import { AppLayout } from "../layouts/AppLayout";
import BurgersPage from "@/pages/BurgersPage";
import { routes } from "./routes";

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
]);
