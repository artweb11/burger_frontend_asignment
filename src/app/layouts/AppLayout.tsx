import { Outlet } from "react-router-dom";
import { Header } from "@/components/common/Header";

export function AppLayout() {
  return (
    <div>
      <Header />
      <main className="py-12">
        <Outlet />
      </main>
    </div>
  );
}
