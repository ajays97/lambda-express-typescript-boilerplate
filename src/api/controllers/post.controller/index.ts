import "reflect-metadata";
import { Request, Response } from "express";
import PostService from "../../../services/post.service";
import Container from "typedi";

export const getPosts = async (request: Request, response: Response) => {
  const postService: PostService = Container.get(PostService);
  const posts = postService.getPosts();

  response.json(posts);
};
