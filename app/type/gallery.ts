import { PhotoType } from "./photo";

export type GalleryType = {
  readonly category: CategoryType;
  readonly categoryDisplayName: string;
  readonly photos: PhotoType[];
};

export type CategoryType =
  | "latest"
  | "cambodia"
  | "japan"
  | "malaysia"
  | "philippines"
  | "singapore"
  | "taiwan"
  | "thailand"
  | "usa"
  | "vietnam";
