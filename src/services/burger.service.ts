import { mockBurgers } from "@/constants/mockBurgers";
import type { Burger } from "@/types/Burger";

export async function getBurgers(): Promise<Burger[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockBurgers), 500);
  });
}
