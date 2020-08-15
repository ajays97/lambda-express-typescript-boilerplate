import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Yay express.ts...!!!");
});

// app.listen(3000) // <-- comment this line out from your app

module.exports = app; // export your app so aws-serverless-express can use it
