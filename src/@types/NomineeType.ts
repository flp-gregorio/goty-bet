export type NomineeData = {
  Nominee: string;
  Publisher: string;
  Votes: number;
  Genre: string;
  Description: string;
  Image: string;
};

export type CategoriesData = {
  [key: string]: {
    description: string;
    nominees: NomineeData[];
  };
};

export type Category = {
  id: number;
  title: string;
  description: string;
  weight: number;
  nominees: NomineeData[];
};
