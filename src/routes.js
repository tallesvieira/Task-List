import { Router } from "express";
import authMiddleware from "./app/middleware/auth";

import UserController from "./app/controller/UserController";
import SessionController from "./app/controller/SessionController";
import TaskController from "./app/controller/TaskController";

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

//todas as rotas abaixo desse middleware precisam de autenticacao
routes.use(authMiddleware);

routes.put("/users", UserController.update);

routes.post("/tasks", TaskController.store);
routes.get("/tasks", TaskController.index);
routes.put("/tasks/:task_id", TaskController.update);
routes.delete("/tasks/:task_id", TaskController.delete);

export default routes;
