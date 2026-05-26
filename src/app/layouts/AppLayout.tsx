import { Outlet } from "react-router-dom";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export function AppLayout() {
  return (
    <div>
      <Header />
      <main className="py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
