// =============== CRUD OPERATIONS FOR PROJECT ===============
import { projects } from "@/app/data/projects";

// @GET ALL PROJECTS
export const GET = async () => {
  return Response.json({ data: projects });
};
