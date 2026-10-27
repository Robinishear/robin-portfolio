/**
 * Project data-access layer (frontend only, no server).
 *
 * Sources:
 *  - static JSON files in src/data/projects
 *  - changes made in the Project Manager, kept in the browser's localStorage
 *
 * localStorage is NOT a permanent backup. Use "Export" in the Project Manager
 * to save your JSON files.
 */
import { staticProjects } from "@/data/projects";
import { projectSchema, type Project } from "@/features/projects/schema";

const STORAGE_KEY = "portfolio.projects.v1";
const CHANGE_EVENT = "portfolio:projects-changed";

type Store = { projects: Project[]; deleted: string[] };

const emptyStore = (): Store => ({ projects: [], deleted: [] });

function readStore(): Store {
  if (typeof window === "undefined") return emptyStore();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyStore();
    const parsed = JSON.parse(raw);
    const projects = (Array.isArray(parsed?.projects) ? parsed.projects : []).flatMap((item: unknown) => {
      const result = projectSchema.safeParse(item);
      return result.success ? [result.data] : [];
    });
    const deleted = Array.isArray(parsed?.deleted)
      ? parsed.deleted.filter((id: unknown): id is string => typeof id === "string")
      : [];
    return { projects, deleted };
  } catch {
    return emptyStore();
  }
}

function writeStore(store: Store) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

const byOrder = (a: Project, b: Project) => a.order - b.order || a.title.localeCompare(b.title);

export function getStaticProjects(): Project[] {
  return [...staticProjects].sort(byOrder);
}

export function getAllProjects(): Project[] {
  const store = readStore();
  const edited = new Map(store.projects.map((p) => [p.id, p]));
  const base = staticProjects.filter((p) => !store.deleted.includes(p.id) && !edited.has(p.id));
  const local = store.projects.filter((p) => !store.deleted.includes(p.id));
  return [...base, ...local].sort(byOrder);
}

export function saveProject(project: Project) {
  const store = readStore();
  const projects = [...store.projects.filter((p) => p.id !== project.id), project];
  writeStore({ projects, deleted: store.deleted.filter((id) => id !== project.id) });
}

export function deleteProject(id: string) {
  const store = readStore();
  writeStore({
    projects: store.projects.filter((p) => p.id !== id),
    deleted: store.deleted.includes(id) ? store.deleted : [...store.deleted, id],
  });
}

export function resetLocalChanges() {
  writeStore(emptyStore());
}

export type ImportResult = { imported: number; errors: string[] };

/** Validates raw JSON text (one project object or an array of them) and saves the valid ones. */
export function importProjectsFromText(text: string, fileName = "file"): ImportResult {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch (error) {
    const message = error instanceof Error ? error.message : "could not be parsed";
    return { imported: 0, errors: [`${fileName}: invalid JSON (${message})`] };
  }

  const items = Array.isArray(data) ? data : [data];
  const errors: string[] = [];
  const valid: Project[] = [];

  items.forEach((item, index) => {
    const result = projectSchema.safeParse(item);
    if (result.success) {
      valid.push(result.data);
    } else {
      const label = items.length > 1 ? `${fileName} #${index + 1}` : fileName;
      result.error.issues.forEach((issue) => {
        errors.push(`${label}: ${issue.path.join(".") || "root"} - ${issue.message}`);
      });
    }
  });

  valid.forEach(saveProject);
  return { imported: valid.length, errors };
}

export function subscribeToProjects(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) callback();
  };
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", onStorage);
  };
}

export function downloadJson(fileName: string, data: unknown) {
  const blob = new Blob([JSON.stringify(data, null, 2) + "\n"], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
