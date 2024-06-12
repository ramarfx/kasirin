import { Request } from "express";
import supabase, { prisma } from "../database";
import { Product } from "../types/product.type";
import { convertBigIntToNumber } from "../utils/utils";

const post = async (request: any) => {
  try {
    if (!(request.body.name || request.body.price || request.body.image)) {
      throw new Error("invalid field");
    }

    const file = request.file;

    if (!file) {
      throw new Error("no file uploaded");
    }

    const filename = `${Date.now()}-${file.originalname}`;

    const { error } = await supabase.storage
      .from("product")
      .upload(filename, file.buffer);

    if (error) {
      throw new Error(error.message);
    }

    const imagePath = supabase.storage.from("product").getPublicUrl(filename)
      .data.publicUrl;

    const product = await prisma.product.create({
      data: {
        name: request.body.name,
        price: request.body.price.toString(),
        image: imagePath,
      },
    });
    return convertBigIntToNumber(product);
  } catch (error) {
    throw new Error(error);
  }
};

const get = async () => {
  try {
    const products = await prisma.product.findMany();

    if (!products) {
      throw new Error("product is not empty");
    }

    return products.map(convertBigIntToNumber);
  } catch (error) {
    throw new Error(error);
  }
};

const show = async (id: number) => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: id,
      },
    });

    if (!product) {
      throw new Error("product not found");
    }

    return convertBigIntToNumber(product);
  } catch (error: any) {
    throw new Error(error);
  }
};

const deleteProduct = async (id: number) => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: id,
      },
    });

    if (!product) {
      throw new Error("product not found");
    }

    const { error } = await supabase.storage
      .from("product")
      .remove([product.image]);
    if (error) {
      throw new Error(error.message);
    }

    await prisma.product.delete({
      where: {
        id: product.id,
      },
    });

    return {
      message: "product deleted",
    };
  } catch (error) {
    throw new Error(error);
  }
};

export default {
  post,
  get,
  show,
  deleteProduct
};
