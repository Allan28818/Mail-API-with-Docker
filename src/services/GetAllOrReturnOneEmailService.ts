import { prisma } from "../client";

class GetAllOrReturnOneEmailService {
  async get(emailId?: string) {
    if (emailId) {
      const emailToReturn = await prisma.emails.findUnique({
        where: {
          id: emailId,
        },
      });

      return emailToReturn;
    }

    const emailsListToReturn = await prisma.emails.findMany();

    return emailsListToReturn;
  }
}

export { GetAllOrReturnOneEmailService };
