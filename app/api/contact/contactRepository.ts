import sendgrid from "@sendgrid/mail";
import { Repository } from "@/app/api/repository";
import { ContactPostParams } from "@/app/api/contact/params";
import { Result } from "./result";
import { assertIsDefined } from "@/app/helper/assert";

export interface ContactRepository extends Repository {
  post(params: ContactPostParams): Promise<Result>;
}

export class ContactRepositoryImpl implements ContactRepository {
  constructor() {
    const apiKey = process.env.SENDGRID_API_KEY;
    assertIsDefined(apiKey);
    sendgrid.setApiKey(apiKey);
  }

  async post(params: ContactPostParams): Promise<Result> {
    const templateId = process.env.SENDGRID_TEMPLATE_ID;
    assertIsDefined(templateId);

    try {
      await sendgrid.send({
        to: params.to,
        from: {
          name: "Yusuke Suzuki",
          email: params.from,
        },
        bcc: params.bcc,
        templateId: templateId,
        dynamicTemplateData: {
          email: params.to,
          name: params.name,
          message: params.message,
        },
      });
      return { _tag: "success" };
    } catch (err) {
      return { _tag: "error", text: "エラー" };
    }
  }
}
