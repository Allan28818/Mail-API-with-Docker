import { prisma } from "../client";

class ListUsersService {
  async list() {
    const users = await prisma.users.findMany();

    return users;
  }
}

export { ListUsersService };
