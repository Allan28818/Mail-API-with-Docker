import { Request, Response } from "express";
import * as yup from "yup";
import { AppError } from "../../errors/AppError";
import { EditUserService } from "../../services/UserServices/EditUserService";

class EditUserController {
  async handle(req: Request, res: Response) {
    const { id, newUsername, newEmail } = req.body;

    const schema = yup.object().shape({
      id: yup
        .string()
        .uuid("Your id must be a valid uuid id")
        .required("Id is a required field"),
      newEmail: yup
        .string()
        .email("Your email must be valid")
        .required("Email is a required field"),
      newUsername: yup
        .string()
        .min(4, "Your username must contain at least 4 characters")
        .max(
          30,
          "Your username is too long, it must contain up to 30 characters"
        ),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (error: any) {
      new AppError(error);
    }

    const editUserService = new EditUserService();

    await editUserService.edit({ id, newEmail, newUsername });

    return res.status(201).json("The user data was successfully updated!");
  }
}

export { EditUserController };
