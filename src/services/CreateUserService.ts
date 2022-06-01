import { dataSource } from "../data-source";
import { User } from "../entities/User";
import { AppError } from "../errors/AppError";
import { hash } from "bcryptjs";

interface UserProps {
  username: string;
  email: string;
  password: string;
}

class CreateUserService {
  async create(props: UserProps) {
    const { username, email, password } = props;

    const usersRepository = dataSource.getRepository(User);

    const usernameAlreadyExists = await usersRepository.findOneBy({
      username,
    });

    const userEmailAlreadyExists = await usersRepository.findOneBy({
      email,
    });

    if (usernameAlreadyExists) {
      throw new AppError("Username already exists", 401);
    }

    if (userEmailAlreadyExists) {
      throw new AppError("Email is been used in another account", 401);
    }

    const passwordHash = await hash(password, 8);

    const user = new User();

    user.username = username;
    user.email = email;
    user.password = passwordHash;

    try {
      await usersRepository.save(user);
    } catch (error: any) {
      throw new Error(error);
    }

    return user;
  }
}

export { CreateUserService };
