import { Request, Response } from "express";
import productService from "../services/product.service";
import cartService from "../services/cart.service";

const addToCart = async (req: Request, res: Response) => {
  try {
    const product = await productService.show(Number(req.params.id), req.params.store)

    const result = await cartService.addToCart(product, req.params.store);

    res.json({data: result})
  } catch (error: any) {
    res.status(400).json({error: error.message})
  }
}

const get = async (req: Request, res: Response) => {
  try {
    const result = await cartService.get(req.params.store);

    res.json({data: result})
  } catch (error: any) {
    res.status(400).json({error: error.message})
  }
}

const destroy = async (req: Request, res: Response) => {
  try {
    const result = await cartService.destroy(Number(req.params.id))

    res.json(result)

  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const destroyAll = async (req: Request, res: Response) => {
  try {
    const result = await cartService.destroyAll(req.params.store);

    res.json(result)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

export default {
    addToCart,
    get,
    destroy,
    destroyAll
}