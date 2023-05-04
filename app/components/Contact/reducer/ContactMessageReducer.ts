type MessageState = {
  name: string;
  email: string;
  message: string;
};

type MessageAction = {
  type: "UPDATE_NAME" | "UPDATE_EMAIL" | "UPDATE_MESSAGE" | "CLEAR";
  payload: {
    text: string;
  };
};

export const messageReducer = (
  state: MessageState,
  action: MessageAction
): MessageState => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload.text };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload.text };
    case "UPDATE_MESSAGE":
      return { ...state, message: action.payload.text };
    case "CLEAR":
      return { ...state, name: "", email: "", message: "" };
  }
};
