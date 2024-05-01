import { users } from "@/app/data/users";

export const POST = async (req) => {
  const request = await req.json();

  // Find the user with the provided email
  const user = users.find((user) => user.email === request.email);

  // If the user is not found, return an error
  if (!user) {
    return Response.json(
      {
        message: "User not found!",
      },
      {
        status: 404,
      }
    );
  }

  // If the password is incorrect, return an error
  if (user.password !== request.password) {
    return Response.json(
      {
        message: "Password is incorrect!",
      },
      {
        status: 400,
      }
    );
  }

  return Response.json({
    message: "Login Successful!",
  });
};
