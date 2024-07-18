export type NomineeData = {
    Nominee: string;
    Publisher: string;
    Votes: number;
    Genre: string;
    Description: string;
};

export type CategoriesData = {
    [key: string]: {
        description: string;
        nominees: NomineeData[];
    };
};

export type Category = {
    description: string;
    nominees: NomineeData[];
};