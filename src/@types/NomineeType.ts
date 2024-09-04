export type User = {
  id: string;
  email: string;
  username: string;
  password: string;
  isAdmin: boolean;
  Votes: Votes[]; // Relationship with Votes
};

export type Category = {
  id: number;
  title: string;
  description: string;
  weight: number;
  nominees: Nominee[]; // Relationship with Nominee
  Votes: Votes[]; // Relationship with Votes
};

export type Nominee = {
  id: number;
  name: string;
  description: string;
  developer: string;
  genre: string;
  categoryId: number;
  category: Category; // Relationship with Category
  Votes: Votes[]; // Relationship with Votes
};

export type Votes = {
  id: number;
  userId: string;
  categoryId: number;
  nomineeId: number;
  user: User; // Relationship with User
  category: Category; // Relationship with Category
  nominee: Nominee; // Relationship with Nominee
};
