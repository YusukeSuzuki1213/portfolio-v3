"use client";
import Heading from "@/app/components/Heading";
import { useReducer } from "react";
import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import Notification from "../Notification";
import { notificationReducer } from "./reducer/ContactNotificationReducer";
import { messageReducer } from "./reducer/ContactMessageReducer";
import SubHeading from "../SubHeading";
import { assertIsDefined } from "@/app/helper/assert";
import { MY_TWITTER_URL } from "@/app/constants/serviceAccount";

export default function Contact() {
  const [messageState, dispatchMessage] = useReducer(messageReducer, {
    name: "",
    email: "",
    message: "",
  });

  const [notificationState, dispatchNotification] = useReducer(
    notificationReducer,
    {}
  );

  const myEmailAddress = process.env.NEXT_PUBLIC_MY_EMAIL_ADDRESS;
  assertIsDefined(myEmailAddress);

  const handleSubmit = async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: messageState.name,
        email: messageState.email,
        message: messageState.message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const notification =
      response.status == 200
        ? {
            message: `Message sent successfully.\nPlease check your inbox.`,
            icon: faCheckCircle,
            iconColor: "text-green-500",
          }
        : {
            message: `Message sent failure.\nPlease send me an email \nfrom your email address.`,
            icon: faXmarkCircle,
            iconColor: "text-red-500",
          };

    dispatchNotification({
      type: "REPLACE_NOTIFICATION",
      payload: {
        notification: notification,
        timer: setTimeout(
          () =>
            dispatchNotification({
              type: "REMOVE_NOTIFICATION",
              payload: {},
            }),
          5000
        ),
      },
    });
  };

  return (
    <>
      {notificationState.notification && (
        <div
          key={Math.random()}
          className="animate-slide-bottom sm:animate-slide-left fixed flex flex-col space-y-4 items-center sm:items-start right-0 left-0 -top-24 w-full sm:-right-80 sm:left-auto sm:top-20 sm:w-auto z-50"
        >
          <Notification
            message={notificationState.notification.message}
            icon={notificationState.notification.icon}
            iconColor={notificationState.notification.iconColor}
            onCloseClicked={() =>
              dispatchNotification({
                type: "REMOVE_NOTIFICATION",
                payload: {},
              })
            }
          />
        </div>
      )}

      <div className="mb-16">
        <Heading id="contact" text="Contact" />
      </div>

      <div className="mb-16">
        <div className="relative mb-6">
          <SubHeading text="How to contact" />
        </div>
        <p className="mb-5 text-white">
          Please contact us using any of the following three methods.
        </p>
        <ul className="ml-7 max-w-md space-y-1 list-disc text-gray-300 list-outside">
          <li>Fill in the form below</li>
          <li>
            Send an email to &quot;
            <span className="italic text-green-500">{myEmailAddress}</span>
            &quot;
          </li>
          <li>
            Send me a direct message on Twitter (&nbsp;
            <a
              href={MY_TWITTER_URL}
              target="_blank"
              className="text-green-500 underline"
            >
              @s1u2z1u3ki
            </a>
            &nbsp;)
          </li>
        </ul>
      </div>

      <div>
        <div className="relative mb-6">
          <SubHeading text="Get in touch" />
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit();
            e.preventDefault();
          }}
        >
          <div className="flex flex-col space-y-12">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border text-sm rounded-lg block w-full p-2.5 bg-neutral-800  border-neutral-700  text-white ring-green-500 focus:border-green-500 focus:outline-none"
                value={messageState.name}
                onChange={(e) =>
                  dispatchMessage({
                    type: "UPDATE_NAME",
                    payload: {
                      text: e.target.value,
                    },
                  })
                }
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-neutral-800  border-neutral-700 text-white ring-green-500 focus:border-green-500 focus:outline-none"
                value={messageState.email}
                onChange={(e) =>
                  dispatchMessage({
                    type: "UPDATE_EMAIL",
                    payload: {
                      text: e.target.value,
                    },
                  })
                }
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={5}
                value={messageState.message}
                onChange={(e) =>
                  dispatchMessage({
                    type: "UPDATE_MESSAGE",
                    payload: {
                      text: e.target.value,
                    },
                  })
                }
                className="block p-2.5 w-full text-sm rounded-lg border bg-neutral-800  border-neutral-700  text-white ring-green-500 focus:border-green-500 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none w-full mr-auto sm:w-3/4 md:w-1/3"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
