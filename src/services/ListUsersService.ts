import { dataSource } from "../data-source";
import { User } from "../entities/User";

class ListUsersService {
  async list() {
    const usersRepository = dataSource.getRepository(User);

    const users = await usersRepository.find();

    return users;
  }
}

export { ListUsersService };
