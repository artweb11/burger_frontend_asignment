import { z } from "zod";

export const burgerSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  price: z.number(),
  image: z.string().url().optional(),
});

export const burgersSchema = z.array(burgerSchema);

export type Burger = z.infer<typeof burgerSchema>;
