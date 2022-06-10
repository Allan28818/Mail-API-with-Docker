import { dataSource } from "../../data-source";
import { User } from "../../entities/User";
import { AppError } from "../../errors/AppError";
import { DeleteEmailUserReferenceService } from "../DeleteUserEmailReferenceService";

interface DeleteUserServiceProps {
  userIdToDelete: string;
  requesterId: string;
}

class DeleteUserService {
  async delete(props: DeleteUserServiceProps) {
    const { requesterId, userIdToDelete } = props;

    const usersRepository = dataSource.getRepository(User);

    const deleteEmailUserReferenceService =
      new DeleteEmailUserReferenceService();

    if (requesterId !== userIdToDelete) {
      throw new AppError(
        "You don't have permission to delete this account!",
        403
      );
    }

    const response = await usersRepository.delete({ id: userIdToDelete });

    await deleteEmailUserReferenceService.delete({
      userDeletedId: userIdToDelete,
    });

    return response;
  }
}

export { DeleteUserService };
