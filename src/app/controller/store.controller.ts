import { Request, Response } from "express";
import storeService from "../services/store.service";

const post = async (req: Request, res: Response) => {
  try {
    const result = await storeService.post(req);

    return res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message)
  }
}

export default {
    post
}