import Heading from "@/app/components/Heading";
import { MY_TWITTER_URL } from "@/app/constants/serviceAccount";

export default function Contact() {
  return (
    <>
      <Heading text="Contact" />
      <div className="ml-4 mt-4">
        <ul className="max-w-md space-y-1 list-disc text-gray-300 list-outside">
          <li>
            Email: &nbsp;
            <span className="italic text-green-500">
              yusuke.suzuki.2024@gmail.com
            </span>
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
