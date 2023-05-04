export type ContactSuccess = {
  readonly _tag: "success";
};

export type ContactError = {
  readonly _tag: "error";
  readonly text: string;
};

export type Result = ContactSuccess | ContactError;

export const isSuccess = (result: Result): boolean => {
  return result._tag == "success" ? true : false;
};
