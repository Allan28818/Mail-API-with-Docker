import { dataSource } from "../data-source";
import { EmailUser } from "../entities/EmailUser";

interface DeleteEmailUserReferenceServiceProps {
  userDeletedId: string;
}

class DeleteEmailUserReferenceService {
  async delete(props: DeleteEmailUserReferenceServiceProps) {
    const { userDeletedId } = props;

    const emailUserRepository = dataSource.getRepository(EmailUser);

    const response = await emailUserRepository.delete({
      creatorId: userDeletedId,
    });

    return response;
  }
}

export { DeleteEmailUserReferenceService };
