import IPost from "../models/postsModel.ts";

interface IRepository {
  getPosts: () => Promise<any>;
  getPost: (_id: any) => Promise<any>;
  createPost: (data: any) => Promise<any>;
  updatePost: (_id: string, data: Partial<IPost>) => Promise<any>;
  deletePost: (_id: any) => Promise<any>;
}

export default IRepository;
