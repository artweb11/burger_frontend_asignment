import { z } from "zod";

export const burgerSchema = z.object({
  place: z.string().min(2, "Burger place is required"),
  address: z.string().min(5, "Address is too short"),
  burgerName: z.string().min(2, "Burger name is required"),
  title: z.string().min(3, "Title is too short"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  image: z
    .any()
    .refine((files) => files?.length > 0, "Image is required")
    .refine(
      (files) => files?.[0]?.size <= 5 * 1024 * 1024,
      "Max file size is 5MB",
    ),
});

export type BurgerFormValues = z.infer<typeof burgerSchema>;
