import { Request } from "express";
import { prisma } from "../database";

const post = async (request: Request) => {
  // const product = await prisma.product.create({
  //     data: request.body
  // })
  return request.body;
};

export default {
  post,
};
