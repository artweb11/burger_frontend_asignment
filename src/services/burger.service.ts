import { burgersSchema } from "@/features/burgers/schema/burgers.schema";
import { api } from "@/lib/api/axios";
import { validateResponse } from "@/lib/api/validate-response";
import type { Burger } from "@/types/Burger";

export async function getBurgers(): Promise<Burger[]> {
  const response = await api.get("/mocks/burgers.mock.json");

  return validateResponse(response.data, burgersSchema);
}

export async function getTopBurgers(): Promise<Burger[]> {
  const response = await api.get("/mocks/top.mock.json");

  return validateResponse(response.data, burgersSchema);
}
