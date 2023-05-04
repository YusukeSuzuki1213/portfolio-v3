import { Repository } from "@/app/api/repository";
import { ContactRepositoryImpl } from "@/app/api/contact/contactRepository";

type RepositoryName = "contact";

type RepositoryObject = {
  [name in RepositoryName]: Repository;
};

const repositories: RepositoryObject = {
  contact: new ContactRepositoryImpl(),
};

export const repositoryFactory = {
  get: (name: RepositoryName): Repository => repositories[name],
};
