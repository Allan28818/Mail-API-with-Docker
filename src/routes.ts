import { Router } from "express";
import { CreateEmailController } from "./controllers/EmailControllers/CreateEmailController";
import { CreateUserController } from "./controllers/UserControllers/CreateUserController";
import { DeleteUserController } from "./controllers/UserControllers/DeleteUserController";
import { ListEmailsController } from "./controllers/EmailControllers/ListEmailsController";
import { ListUsersController } from "./controllers/UserControllers/ListUsersController";
import { EditUserController } from "./controllers/UserControllers/EditUserController";

const routes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const deleteUserController = new DeleteUserController();
const editUserController = new EditUserController();

const createEmailController = new CreateEmailController();
const listEmailsController = new ListEmailsController();

routes.get("/list-users", listUsersController.handle);
routes.get("/list-emails", listEmailsController.handleGetAllEmails);
routes.get("/list-email/:id", listEmailsController.handleFetchAnEmailById);

routes.post("/create-user", createUserController.handle);
routes.post("/send-email", createEmailController.handle);

routes.delete("/delete-user", deleteUserController.handle);

routes.put("/edit-user", editUserController.handle);

export { routes };
