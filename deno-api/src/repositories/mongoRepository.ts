import { Bson } from "../../deps.ts";
import MongoDatabase from "../dbConections/mongodb.ts";

import IRepository from "./IRepository.ts";
import IPost from "../models/postsModel.ts";

const db = (await MongoDatabase.getInstance()).getDatabase;
const postsCollection = db.collection<IPost>("posts");

interface IUpdateResult {
  upsertedId: Bson.Document | undefined;
  upsertedCount: number;
  matchedCount: number;
  modifiedCount: number;
}

export class MongoRepository implements IRepository {
  async getPosts(): Promise<IPost[]> {
    return await postsCollection.find().toArray();
  }

  async getPost(_id: string): Promise<IPost | undefined> {
    return await postsCollection.findOne({ _id });
  }

  async createPost(data: IPost): Promise<Bson.Document> {
    return await postsCollection.insertOne(data);
  }

  async updatePost(_id: string, data: Partial<IPost>): Promise<IUpdateResult> {
    return await postsCollection.updateOne({
      _id: new Bson.ObjectId(_id),
    }, {
      $set: data,
    });
  }

  async deletePost(_id: string): Promise<number> {
    return await postsCollection.deleteOne({ _id });
  }
}
