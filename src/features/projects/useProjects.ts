"use client";

import { useEffect, useState } from "react";
import { getAllProjects, getStaticProjects, subscribeToProjects } from "@/api/projects";
import type { Project } from "./schema";

/** Starts with the static JSON (same on server and client), then merges browser-saved changes. */
export function useProjects(): Project[] {
  const [projects, setProjects] = useState<Project[]>(() => getStaticProjects());

  useEffect(() => {
    const refresh = () => setProjects(getAllProjects());
    refresh();
    return subscribeToProjects(refresh);
  }, []);

  return projects;
}
