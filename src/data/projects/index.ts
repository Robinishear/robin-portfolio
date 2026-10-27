import { projectSchema, type Project } from "@/features/projects/schema";

import taskninja from "./taskninja.json";
import tradingCenter from "./trading-center.json";
import marigoldBillManagement from "./marigold-bill-management.json";
import microTaskEarning from "./micro-task-earning.json";


const rawProjects: unknown[] = [taskninja, tradingCenter, marigoldBillManagement, microTaskEarning];

export const staticProjects: Project[] = rawProjects.flatMap((item) => {
  const result = projectSchema.safeParse(item);
  if (!result.success) {
    console.warn("Invalid project JSON skipped:", result.error.issues);
    return [];
  }
  return [result.data];
});
