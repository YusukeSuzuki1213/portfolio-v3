import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { serviceAccounts, toAwesomeIcon } from "../constants/serviceAccount";

export default function Footer() {
  return (
    <>
      <div className="mx-auto w-full max-w-screen-xl p-8 py-6 lg:py-8">
        <hr className="my-4 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-400">
            © 2023 Yusuke Suzuki. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {serviceAccounts.map((account) => {
              return (
                <a
                  key={account.url}
                  href={account.url}
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <FontAwesomeIcon
                    className="w-5 h-5"
                    icon={toAwesomeIcon(account.icon)}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
