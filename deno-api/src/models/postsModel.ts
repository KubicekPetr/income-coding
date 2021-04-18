import { Bson } from "../../deps.ts";

interface IPost{
    _id:Bson.Document;
    title:string;
    post:string;
    username:string;
    createdAt:Date;
    updatedAt?:Date;
    likes:number;
    comments:IComment[];
    hashtags?:string[];
}

interface IComment{
    _id:Bson.Document;
    comment:string;
    likes:number;
    replies: IComment[];
}