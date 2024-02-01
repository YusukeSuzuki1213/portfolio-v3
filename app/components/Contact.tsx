import Heading from "@/app/components/Heading";
import { assertIsDefined } from "@/app/helper/assert";
import { MY_TWITTER_URL } from "@/app/constants/serviceAccount";

export default function Contact() {
  const myEmailAddress = process.env.NEXT_PUBLIC_MY_EMAIL_ADDRESS;
  assertIsDefined(myEmailAddress);

  return (
    <>
      <div className="mb-16">
        <Heading id="contact" text="Contact" />
      </div>

      <div className="mb-16">
        <p className="mb-5 text-white">
          You can reach me by either of the two following methods.
        </p>
        <ul className="ml-7 max-w-md space-y-1 list-disc text-gray-300 list-outside">
          <li>
            Email: &nbsp;
            <span className="italic text-green-500">{myEmailAddress}</span>
          </li>
          <li>
            DM: &nbsp;
            <a
              href={MY_TWITTER_URL}
              target="_blank"
              className="text-green-500 underline"
            >
              @s1u2z1u3ki
            </a>
            &nbsp;
          </li>
        </ul>
      </div>
    </>
  );
}
