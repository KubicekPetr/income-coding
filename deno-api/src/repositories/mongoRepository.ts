import MongoDatabase from "../dbConections/mongodb.ts";
const db = (await MongoDatabase.getInstance()).getDatabase;
const postsCollection = db.collection("posts");

export class MongoRepository {
  async findMany(): Promise<any> {
    return await postsCollection.find().toArray();
  }
}
