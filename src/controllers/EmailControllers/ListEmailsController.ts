import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { GetAllOrReturnOneEmailService } from "../../services/EmailServices/GetAllOrReturnOneEmailService";

class ListEmailsController {
  async handleGetAllEmails(req: Request, res: Response) {
    const getAllOrReturnOneEmailService = new GetAllOrReturnOneEmailService();

    const emailsList = await getAllOrReturnOneEmailService.get();

    return res.status(200).json({ emailsList });
  }

  async handleFetchAnEmailById(req: Request, res: Response) {
    const { id } = req.params;

    const getAllOrReturnOneEmailService = new GetAllOrReturnOneEmailService();

    if (!id) {
      throw new AppError("Email id wasn't provided!");
    }

    const emailToReturn = await getAllOrReturnOneEmailService.get(id);

    return res.status(200).json({ email: emailToReturn });
  }
}

export { ListEmailsController };
