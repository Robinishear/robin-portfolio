import { z } from "zod";

export const PROJECT_STATUSES = ["completed", "in-progress", "planned"] as const;

const urlOrEmpty = z.union([z.literal(""), z.string().url("Must be a valid URL (include https://)")]);

export const projectSchema = z.object({
  id: z.string().min(1, "id is required"),
  slug: z
    .string()
    .min(1, "slug is required")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers and hyphens only"),
  title: z.string().min(2, "title is too short"),
  description: z.string().min(10, "description must be at least 10 characters"),
  image: z.string().min(1, "image path or URL is required"),
  category: z.string().min(2, "category is required"),
  technologies: z.array(z.string().min(1)).min(1, "add at least one technology"),
  github: urlOrEmpty,
  liveDemo: urlOrEmpty,
  featured: z.boolean(),
  status: z.enum(PROJECT_STATUSES),
  order: z.number().int().min(0),
});

export type Project = z.infer<typeof projectSchema>;
export type ProjectStatus = (typeof PROJECT_STATUSES)[number];
