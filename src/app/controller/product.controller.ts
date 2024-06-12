import { Request, Response } from "express";
import productService from "../services/product.service";

const post = async (req: Request, res: Response ) => {
    try {
        const result = productService.post(req);

        // res.json(result)
        const data = req.body

        return res.json({
            data: req.body,
            message: 'success post product',
        })
        

    } catch (error) {
        res.json(error)
    }
}

export default {
    post
}