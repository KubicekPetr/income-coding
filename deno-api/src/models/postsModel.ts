import { Bson } from "../../deps.ts";

import IComment from "./commentModel.ts";

interface IPost {
  _id: Bson.Document;
  title: string;
  post: string;
  createdBy: string;
  createdAt: Date;
  updatedBy?: string;
  updatedAt?: Date;
  hashtags?: string[];
  reactions?: IReactions;
}

interface IReactions {
  positives?: number;
  negatives?: number;
  comments?: IComment[];
}

export default IPost;
