export type WorkExperienceType = {
  name: string;
  period: string;
  employmentType: string;
  teamSize: string;
  task: string;
  technology: string;
  technicalOutputs: (Talk | Article)[];
  comment: string;
};

export type Talk = {
  title: string;
  url: string;
};
export type Article = {
  title: string;
  url: string;
};
