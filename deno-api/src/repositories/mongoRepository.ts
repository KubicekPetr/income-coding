import MongoDatabase from "../dbConections/mongodb.ts";
const db = (await MongoDatabase.getInstance()).getDatabase;
const postsCollection = db.collection("posts");
