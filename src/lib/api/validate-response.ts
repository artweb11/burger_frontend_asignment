import { type ZodSchema } from "zod";

export function validateResponse<T>(data: unknown, schema: ZodSchema<T>): T {
  return schema.parse(data);
}
