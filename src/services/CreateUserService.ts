import { AppError } from "../errors/AppError";
import { hash } from "bcryptjs";
import { prisma } from "../client";

interface UserProps {
  username: string;
  email: string;
  password: string;
}

class CreateUserService {
  async create(props: UserProps) {
    const { username, email, password } = props;

    const usernameAlreadyExists = await prisma.users.findMany({
      where: {
        username,
      },
    });

    const userEmailAlreadyExists = await prisma.users.findMany({
      where: {
        email,
      },
    });

    if (usernameAlreadyExists.length) {
      console.log(usernameAlreadyExists);
      throw new AppError("Username already exists", 401);
    }

    if (userEmailAlreadyExists.length) {
      throw new AppError("Email is been used in another account", 401);
    }

    const passwordHash = await hash(password, 8);

    const userResponse = await prisma.users.create({
      data: {
        email,
        username,
        password: passwordHash,
      },
    });

    return userResponse;
  }
}

export { CreateUserService };
