import express from 'express'
import productController from '../controller/product.controller';

export const publicRouter = express.Router();

publicRouter.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    })
})

publicRouter.post('/api/products', productController.post)
publicRouter.post('/api/product', (req, res) => {
  res.json({
    message: req.body
  })
})


