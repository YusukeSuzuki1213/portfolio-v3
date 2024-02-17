type PostType = {
  title: string;
  description: string;
  publishDate: string;
  url: string;
  imageUrl: string;
};

export type InternalPostType = PostType & {
  slug: string;
  titleIcon: string;
  content: string;
};

export type ExternalPostType = PostType & {};
