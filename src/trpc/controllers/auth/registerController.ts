import type { RegisterUser } from "@/lib/validators/registrations";
import db from "@/db";
const registerController = async (input: RegisterUser, ctx: object) => {
  try {
    const user = {
      name: input.name,
      email: input.email,
      // ADMIN to Admin
      role: input.role,
      position: input.position,
    };
    if (!user.role) throw new Error("User not found");
    const newUser = await db.user.create({
      data: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
    return {
      message: "User registered successfully",
      user: newUser,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "User registration failed",
      error,
    };
  }
};

export { registerController };
