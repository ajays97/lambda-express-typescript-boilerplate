import serverless from "serverless-http";
import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Yay 1234 express.ts...!!!");
});

module.exports.handler = serverless(app);
