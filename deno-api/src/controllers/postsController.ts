import { MongoRepository } from "../repositories/mongoRepository.ts";
const mongoRepository = new MongoRepository();

export const getAll = async (context: any) => {
  console.log("Getting all posts");
  let response: Object;
  try {
    const data = await mongoRepository.findMany();
    response = {
      success: true,
      length: data.length,
      data,
    };
  } catch (error) {
    response = {
      success: false,
      length: 0,
      error: error.toString(),
    };
    context.response.status = 500;
  }
  context.response.body = response;
};
