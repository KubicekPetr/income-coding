import { Bson } from "../../deps.ts";
import MongoDatabase from "../dbConections/mongodb.ts";

import IRepository from "./IRepository.ts";
import { IPost, PostSchema } from "../models/postModel.ts";

const db = (await MongoDatabase.getInstance()).getDatabase;
const postsCollection = db.collection<IPost>("posts");

export interface IUpdateResult {
  upsertedId?: Bson.ObjectId;
  upsertedCount: number;
  matchedCount: number;
  modifiedCount: number;
}

export class MongoRepository implements IRepository {
  async getPosts(): Promise<IPost[]> {
    return await postsCollection.find().toArray();
  }

  async getPost(_id: string): Promise<IPost | undefined> {
    return await postsCollection.findOne({ _id: new Bson.ObjectId(_id) });
  }

  async createPost(data: PostSchema): Promise<Bson.Document> {
    return await postsCollection.insertOne(data);
  }

  async updatePost(_id: string, data: Partial<PostSchema>): Promise<IUpdateResult> {
    return await postsCollection.updateOne({
      _id: new Bson.ObjectId(_id),
    }, {
      $set: data,
    });
  }

  async removePost(_id: string): Promise<number> {
    return await postsCollection.deleteOne({ _id: new Bson.ObjectId(_id) });
  }
}
