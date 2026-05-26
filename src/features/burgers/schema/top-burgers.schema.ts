import { z } from "zod";

export const topSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  price: z.number(),
  image: z.string().optional(),
  spot: z.number(),
  taste: z.number(),
  texture: z.number(),
  visual: z.number(),
});

export const topBurgersSchema = z.array(topSchema);

export type TopBurger = z.infer<typeof topBurgersSchema>;
