import { IUser } from "../user/user";
import { ISubject } from "./subject";

export interface IArticle {
    ID : number;
    Title : string;
    SubTitle : string;
    Description : string;
    Content : string;
    AuthorID : number;
    SubjectID : number;
    User : IUser;
    Subject : ISubject;
}