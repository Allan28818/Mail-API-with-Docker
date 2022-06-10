import { Request, Response } from "express";
import * as yup from "yup";
import { AppError } from "../../errors/AppError";
import { DeleteUserService } from "../../services/UserServices/DeleteUserService";

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { requesterId, userIdToDelete } = req.body;

    const schema = yup.object().shape({
      requesterId: yup
        .string()
        .uuid("Requester id must be a valid uuid string")
        .required("Requester id is a required field"),
      userIdToDelete: yup
        .string()
        .uuid("User id must be a valid uuid string")
        .required("User id is a required field"),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (error: any) {
      throw new AppError(error);
    }

    const deleteUserService = new DeleteUserService();

    await deleteUserService.delete({
      requesterId,
      userIdToDelete,
    });

    return res
      .status(204)
      .json({ status: 204, message: "The user was successfully deleted!" });
  }
}

export { DeleteUserController };
