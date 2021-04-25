import { IUpdateResult, MongoRepository } from "../repositories/mongoRepository.ts";
import { Bson, RouterContext } from "../../deps.ts";

import { IPost, PostSchema } from "../models/postModel.ts";

const mongoRepository = new MongoRepository();

export const getPosts = async (context: RouterContext) => {
  try {
    console.log("Getting all posts");
    const result: IPost[] = await mongoRepository.getPosts();
    context.response.body = {
      error: false,
      length: result.length,
      result,
    };
  } catch (error) {
    context.response.status = 500;
    context.response.body = { error };
  }
};

export const getPost = async (context: RouterContext) => {
  try {
    const id: string = context.params.id!;
    console.log(`Getting the post with id ${id}`);
    const result: IPost | undefined = await mongoRepository.getPost(id);
    context.response.body = {
      error: false,
      result,
    }
  } catch (error) {
    context.response.status = 500;
    context.response.body = { error };
  }
};

export const createPost = async (context: RouterContext) => {
  try {
    const data: PostSchema = {
      ...await context.request.body().value,
      createdAt: new Date(),
    }
    console.log("Creating the new post");
    const result: Bson.Document = await mongoRepository.createPost(data);
    context.response.body = {
      error: false,
      result: {
        _id: result,
      },
      data,
    };
  } catch (error) {
    context.response.status = 500;
    context.response.body = { error };
  }
};

export const updatePost = async (context: RouterContext) => {
  try {
    const id: string = context.params.id!;
    const data: PostSchema = {
      ...await context.request.body().value,
      updatedAt: new Date(),
    }
    console.log(`Updating the post with id ${id}`);
    const result: IUpdateResult = await mongoRepository.updatePost(id, data);
    context.response.body = {
      error: false,
      result,
      data,
    };
  } catch (error) {
    context.response.status = 500;
    context.response.body = { error };
  }
};

export const removePost = async (context: RouterContext) => {
  try {
    const id: string = context.params.id!;
    console.log(`Removing the post with id ${id}`);
    const result: number = await mongoRepository.removePost(id);
    context.response.body = {
      error: false,
      result,
    }
  } catch (error) {
    context.response.status = 500;
    context.response.body = { error };
  }
};
