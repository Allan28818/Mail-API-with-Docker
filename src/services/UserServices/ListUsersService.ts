<<<<<<< HEAD:src/services/UserServices/ListUsersService.ts
import { dataSource } from "../../data-source";
import { User } from "../../entities/User";
=======
import { prisma } from "../client";
>>>>>>> feat/prisma:src/services/ListUsersService.ts

class ListUsersService {
  async list() {
    const users = await prisma.users.findMany();

    return users;
  }
}

export { ListUsersService };
