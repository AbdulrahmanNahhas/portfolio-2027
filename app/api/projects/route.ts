import { projects } from "@/lib/projects";

// A static JSON endpoint for consumers; the website reads the same data directly.
export const dynamic = "force-static";

export function GET() {
  return Response.json(projects);
}
