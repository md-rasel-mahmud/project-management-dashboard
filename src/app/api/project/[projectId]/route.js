// =============== CRUD OPERATIONS FOR PROJECT ===============
import { projects } from "@/app/data/projects";

// @GET ALL PROJECTS
export const GET = async (_req, context) => {
  const projectId = context.params.projectId;
  const data = projects.find((project) => project.id === parseInt(projectId));

  if (!data) {
    return Response.json(
      {
        message: "Project not found!",
      },
      {
        status: 404,
      }
    );
  }

  return Response.json({ data });
};

// @EDIT PROJECT
export const PUT = async (req, context) => {
  const projectId = context.params.projectId;
  const request = await req.json();

  const index = projects.findIndex(
    (project) => project.id === parseInt(projectId)
  );

  if (index === -1) {
    return Response.json(
      {
        message: "Project not found!",
      },
      {
        status: 404,
      }
    );
  }

  projects[index] = {
    ...projects[index],
    ...request,
  };

  return Response.json({
    message: "Project updated successfully!",
    data: projects[index],
  });
};

// @DELETE PROJECT
export const DELETE = async (_req, context) => {
  const projectId = context.params.projectId;

  const index = projects.findIndex(
    (project) => project.id === parseInt(projectId)
  );

  if (index === -1) {
    return Response.json(
      {
        message: "Project not found!",
      },
      {
        status: 404,
      }
    );
  }

  projects.splice(index, 1);

  return Response.json({
    message: "Project deleted successfully!",
  });
};
