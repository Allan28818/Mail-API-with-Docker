import { dataSource } from "../../data-source";
import { Email } from "../../entities/Email";

interface GetAllOrReturnOneEmailServiceProps {
  emailId?: string;
}

class GetAllOrReturnOneEmailService {
  async get(emailId?: string) {
    const emailsRepository = dataSource.getRepository(Email);

    if (emailId) {
      const emailToReturn = await emailsRepository.findBy({ id: emailId });

      return emailToReturn;
    }

    const emailsListToReturn = await emailsRepository.find();

    return emailsListToReturn;
  }
}

export { GetAllOrReturnOneEmailService };
