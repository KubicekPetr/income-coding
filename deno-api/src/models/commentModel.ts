import { Bson } from "../../deps.ts";

interface IComment {
  _id: Bson.Document;
  comment: string;
  reactions?: IReactions;
}

interface IReactions {
  positives?: number;
  negatives?: number;
  comments?: IComment[];
}

export default IComment;
