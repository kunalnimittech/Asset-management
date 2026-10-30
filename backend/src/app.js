import express from "express";
import { notFound, errorHandler } from "./middleware/error.middleware.js";


export function createServer() {
  const app = express();

  app.use(express.json());

  app.use(notFound);
  app.use(errorHandler);

  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  return app;
}
