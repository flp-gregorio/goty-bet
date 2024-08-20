export type User = {
    id: string;
    email: string;
    username: string;
    password: string;
    isAdmin: boolean;
  };
  
  export type Category = {
    id: number;
    title: string;
    description: string;
    weight: number;
    nominees: Nominee[];
  };
  
  export type Nominee = {
    id: number;
    name: string;
    description: string;
    developer: string;
    genre: string;
    categoryId: number;
    category: Category;
  };
  
