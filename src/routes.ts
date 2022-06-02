import { Router } from "express";
import { CreateEmailController } from "./controllers/CreateEmailController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListEmailsController } from "./controllers/ListEmailsController";
import { ListUsersController } from "./controllers/ListUsersController";

const routes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

const createEmailController = new CreateEmailController();
const listEmailsController = new ListEmailsController();

routes.get("/list-users", listUsersController.handle);
routes.get("/list-emails", listEmailsController.handleGetAllEmails);
routes.get("/list-email/:id", listEmailsController.handleFetchAnEmailById);

routes.post("/create-user", createUserController.handle);
routes.post("/send-email", createEmailController.handle);

export { routes };
