export type ContactPostParams = {
  readonly to: string;
  readonly from: string;
  readonly bcc?: string;
  readonly name: string;
  readonly message: string;
};
