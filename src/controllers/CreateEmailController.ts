import { Request, Response } from "express";
import * as yup from "yup";
import { AppError } from "../errors/AppError";
import { CreateEmailService } from "../services/CreateEmailService";

class CreateEmailController {
  async handle(req: Request, res: Response) {
    const { senderData, receiverData, title, body } = req.body;

    const schema = yup.object().shape({
      senderData: yup.object().shape({
        id: yup.string().required("Sender id is a required field"),
        email: yup
          .string()
          .email("Your sender email must be valid")
          .required("Sender email is a required field"),
      }),
      receiverData: yup.object().shape({
        id: yup.string().required("Receiver id is a required field"),
        email: yup
          .string()
          .email("Your receiver email must be valid")
          .required("Receiver email is a required field"),
      }),
      title: yup.string(),
      body: yup.string().required("Body is a required field"),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (error: any) {
      throw new AppError(error);
    }

    const createEmailService = new CreateEmailService();

    const email = await createEmailService.create({
      senderData,
      receiverData,
      body,
      title,
    });

    return res.status(201).json({ email });
  }
}

export { CreateEmailController };
