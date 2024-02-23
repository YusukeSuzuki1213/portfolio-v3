export type PostType = {
  title: string;
  description: string;
  publishDate: string;
  url: string;
  imageUrl: string;
  titleIconUrl: string;
};

export type InternalPostType = PostType & {
  slug: string;
  content: string;
};

export type ExternalPostType = PostType & {};
