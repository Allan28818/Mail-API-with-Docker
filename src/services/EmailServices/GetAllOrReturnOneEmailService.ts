<<<<<<< HEAD:src/services/EmailServices/GetAllOrReturnOneEmailService.ts
import { dataSource } from "../../data-source";
import { Email } from "../../entities/Email";

interface GetAllOrReturnOneEmailServiceProps {
  emailId?: string;
}
=======
import { prisma } from "../client";
>>>>>>> feat/prisma:src/services/GetAllOrReturnOneEmailService.ts

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
