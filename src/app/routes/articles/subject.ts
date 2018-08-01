import { IArticle } from "./article";

export interface ISubject {
    ID: number;
    Title : string;
    Description : string;
    Article : IArticle[];
}