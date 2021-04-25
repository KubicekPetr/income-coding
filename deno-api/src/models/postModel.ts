import { Bson } from "../../deps.ts";
import IComment from "./commentModel.ts";

interface IPost {
  _id: Bson.ObjectId;
  title: string;
  post: string;
  createdBy: string;
  createdAt: Date;
  updatedBy?: string;
  updatedAt?: Date;
  hashtags?: string[];
  reactions?: IReactions;
}

type PostSchema = Omit<IPost, "_id">;

interface IReactions {
  positives?: number;
  negatives?: number;
  comments?: IComment[];
}

export type { 
  IPost,
  PostSchema,
};
