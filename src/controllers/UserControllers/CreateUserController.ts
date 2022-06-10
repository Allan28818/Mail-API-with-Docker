import { Request, Response } from "express";
import * as yup from "yup";
<<<<<<< HEAD:src/controllers/UserControllers/CreateUserController.ts
import { dataSource } from "../../data-source";
import { User } from "../../entities/User";
import { AppError } from "../../errors/AppError";
import { CreateUserService } from "../../services/UserServices/CreateUserService";
=======
import { AppError } from "../errors/AppError";
import { CreateUserService } from "../services/CreateUserService";
>>>>>>> feat/prisma:src/controllers/CreateUserController.ts

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { username, email, password } = req.body;

    const schema = yup.object().shape({
      username: yup
        .string()
        .min(4, "Your username must contain at least 4 characters")
        .max(
          30,
          "Your username is too long, it must contain up to 30 characters"
        )
        .required(),
      email: yup
        .string()
        .email("Your email isn't valid")
        .required("Email is a required field"),
      password: yup
        .string()
        .min(6, "Your password must contain at least 6 characters")
        .max(70, "Your password must contain up to 70 characters"),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (error: any) {
      throw new AppError(error);
    }

    const createUserService = new CreateUserService();

    const user = await createUserService.create({ username, email, password });

    return res.status(201).json({ user });
  }
}

export { CreateUserController };
