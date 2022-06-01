import { dataSource } from "../data-source";
import { Email } from "../entities/Email";
import { EmailUser } from "../entities/EmailUser";

interface EmailProps {
  senderData: {
    id: string;
    email: string;
  };
  receiverData: {
    id: string;
    email: string;
  };
  title: string;
  body: string;
}

class CreateEmailService {
  async create(props: EmailProps) {
    const { senderData, receiverData, title, body } = props;

    const emailsRepository = dataSource.getRepository(Email);
    const emailUserRepository = dataSource.getRepository(EmailUser);
    const email = new Email();

    email.creatorId = senderData.id;
    email.senderData = senderData;
    email.receiverData = receiverData;
    email.title = title;
    email.body = body;

    const emailUser = new EmailUser();

    const emailCreationResponse = await emailsRepository.save(email);

    emailUser.creatorId = emailCreationResponse.creatorId;
    emailUser.emailId = emailCreationResponse.id;
    await emailUserRepository.save(emailUser);

    return email;
  }
}

export { CreateEmailService };
