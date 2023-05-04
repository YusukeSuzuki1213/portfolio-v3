import { repositoryFactory } from "@/app/api/repositoryFactory";
import { ContactRepository } from "@/app/api/contact/contactRepository";
import { isSuccess } from "@/app/api/contact/result";
import { assertIsDefined } from "@/app/helper/assert";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const repository = repositoryFactory.get("contact") as ContactRepository;

  const myEmailAddress = process.env.NEXT_PUBLIC_MY_EMAIL_ADDRESS;
  assertIsDefined(myEmailAddress);

  const result = await repository.post({
    to: email,
    from: myEmailAddress,
    bcc: myEmailAddress,
    name: name,
    message: message.replace(/\r?\n/g, "<br/>"),
  });

  if (isSuccess(result)) {
    return new Response("Success", { status: 200 });
  } else {
    return new Response("Failure", { status: 500 });
  }
}
