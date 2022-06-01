import { Router } from "express";
import { CreateEmailController } from "./controllers/CreateEmailController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUsersController";

const routes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

const createEmailController = new CreateEmailController();

routes.get("/list-users", listUsersController.handle);

routes.post("/create-user", createUserController.handle);
routes.post("/send-email", createEmailController.handle);

export { routes };
