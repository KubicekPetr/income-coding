import { MongoClient } from "../../deps.ts";

class MongoDatabase {
  public client: MongoClient;
  private MONGO_URL: string;
  private DB_NAME: string;
  private static instance: MongoDatabase;

  constructor() {
    this.MONGO_URL = Deno.env.get("MONGO_URL") || "mongodb://localhost:3002";
    this.DB_NAME = Deno.env.get("DB_NAME") || "content_storage";
    this.client = {} as MongoClient;
  }

  async connect() {
    this.client = new MongoClient();
    await this.client.connect(this.MONGO_URL);
  }

  get getDatabase() {
    return this.client.database(this.DB_NAME);
  }

  static async getInstance(): Promise<MongoDatabase> {
    if (!MongoDatabase.instance) {
      MongoDatabase.instance = new MongoDatabase();
    }

    await MongoDatabase.instance.connect();
    console.log("Connecting to mongo on ", MongoDatabase.instance.MONGO_URL);

    return MongoDatabase.instance;
  }
}

export default MongoDatabase;
