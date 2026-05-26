import { burgersSchema } from "@/features/burgers/schema/burgers.schema";
import { topBurgersSchema } from "@/features/burgers/schema/top-burgers.schema";
import { api } from "@/lib/api/axios";
import { validateResponse } from "@/lib/api/validate-response";
import type { Burger } from "@/types/Burger";
import type { TopBurger } from "@/types/TopBurger";

export async function getBurgers(): Promise<Burger[]> {
  await new Promise((res) => setTimeout(res, 2000)); // Simulate network delay
  const response = await api.get("/mocks/burgers.mock.json");

  return validateResponse(response.data, burgersSchema);
}

export async function getTopBurgers(): Promise<TopBurger[]> {
  await new Promise((res) => setTimeout(res, 2000)); // Simulate network delay
  const response = await api.get("/mocks/top-burgers.mock.json");

  return validateResponse(response.data, topBurgersSchema);
}
