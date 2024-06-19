import { Request, Response } from "express";
import productService from "../services/product.service";

const post = async (req: Request, res: Response ) => {
    try {
        const result = await productService.post(req, req.params.store);

        return res.json({data: result})
    
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const get = async (req: Request, res: Response) => {
  try {
    const result = await productService.get(req.params.store);

    return res.json({data: result})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const show = async (req: Request, res: Response) => {
  try {
    const result = await productService.show(Number(req.params.id), req.params.store);

    return res.json({data: result})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const destroy = async (req: Request, res: Response) => {
  try {
    const result = await productService.deleteProduct(Number(req.params.id))

    return res.json(result)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const destroyAll = async (req: Request, res: Response) => {
  try {
    const result = await productService.destroyAll(req.params.store);

    res.json(result)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

export default {
    post,
    get,
    show,
    destroy,
    destroyAll
}