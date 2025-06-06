import { z } from "zod";

export const createProjectSchema = z.object({
  workspaceId: z.string().optional(),
  name: z.string().trim().min(1, "Required"),
  image: z
    .union([
      z.instanceof(File),
      z
        .string()
        .transform((value) => (value === "" ? undefined : value)),
    ])
    .optional(),
});

export const updateProjectSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Minimum 1 character required")
    .optional(),
  image: z
    .union([
      z.instanceof(File),
      z
        .string()
        .transform((value) => (value === "" ? undefined : value)),
    ])
    .optional(),
});
