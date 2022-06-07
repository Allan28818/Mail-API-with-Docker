import { prisma } from "../client";

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

    const emailResponse = await prisma.emails.create({
      data: {
        creatorId: senderData.id,
        senderData,
        receiverData,
        title,
        body,
      },
    });

    await prisma.email_user.create({
      data: {
        creatorId: emailResponse.creatorId,
        emailId: emailResponse.id,
      },
    });

    return emailResponse;
  }
}

export { CreateEmailService };
