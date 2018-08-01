import { IArticle } from "../articles/article";

export interface IUser {
    ID: number;
    LastName : string;
    FirstName : string;
    UserName : string;
    Email : string;
    Password :string;
    ProfilePicture : string;
    Article : IArticle[];
}