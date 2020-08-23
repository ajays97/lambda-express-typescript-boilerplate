import { Service } from "typedi";

@Service()
class PostService {
  constructor() {}

  public getPosts(): any[] {
    return [{ name: "Post1" }, { name: "Post2" }];
  }
}

export default PostService;
