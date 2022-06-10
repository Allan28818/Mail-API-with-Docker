import { dataSource } from "../../data-source";
import { User } from "../../entities/User";
import { AppError } from "../../errors/AppError";

interface EditUserServiceProps {
  id: string;
  newEmail: string;
  newUsername: string;
}

class EditUserService {
  async edit(props: EditUserServiceProps) {
    const { id, newEmail, newUsername } = props;

    const usersRepository = dataSource.getRepository(User);

    const usernameAlreadyExists = await usersRepository.findOneBy({
      username: newUsername,
    });
    const emailAlreadyExists = await usersRepository.findOneBy({
      email: newEmail,
    });

    if (!!usernameAlreadyExists) {
      throw new AppError("User name already exists!", 403);
    }

    if (!!emailAlreadyExists) {
      throw new AppError("Email is been used in another account!", 403);
    }

    const response = await usersRepository.update(
      { id },
      {
        username: newUsername,
        email: newEmail,
      }
    );

    return response;
  }
}

export { EditUserService };
