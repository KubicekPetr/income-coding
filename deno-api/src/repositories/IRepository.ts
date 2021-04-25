interface IRepository {
  getPosts: () => Promise<any>;
  getPost: (_id: any) => Promise<any>;
  createPost: (data: any) => Promise<any>;
  updatePost: (_id: string, data: any) => Promise<any>;
  removePost: (_id: any) => Promise<any>;
}

export default IRepository;
