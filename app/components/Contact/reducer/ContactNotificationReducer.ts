import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type ContactNotificationState = {
  notification?: ContactNotification;
  timer?: NodeJS.Timeout;
};

type ContactNotification = {
  message: string;
  icon: IconDefinition;
  iconColor: string;
};

type ContactNotificationAction = {
  type: "REMOVE_NOTIFICATION" | "REPLACE_NOTIFICATION";
  payload: {
    notification?: ContactNotification;
    timer?: NodeJS.Timeout;
  };
};

export const notificationReducer = (
  state: ContactNotificationState,
  action: ContactNotificationAction
): ContactNotificationState => {
  switch (action.type) {
    case "REPLACE_NOTIFICATION":
      if (action.payload.notification == undefined) return { ...state };
      clearTimeout(state.timer);
      return {
        notification: {
          message: action.payload.notification.message,
          icon: action.payload.notification.icon,
          iconColor: action.payload.notification.iconColor,
        },
        timer: action.payload.timer,
      };
    case "REMOVE_NOTIFICATION":
      clearTimeout(state.timer);
      return { notification: undefined, timer: undefined };
  }
};
