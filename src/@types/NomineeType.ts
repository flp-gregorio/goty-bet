export type NomineeData = {
    Nominee: string;
    Publisher: string;
    Votes: number;
    Genre: string;
};

export type CategoriesData = {
    [key: string]: NomineeData[];
};