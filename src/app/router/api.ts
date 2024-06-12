import express from 'express'
import productController from '../controller/product.controller';
import { upload } from '../../index';

export const publicRouter = express.Router();

publicRouter.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    })
})

publicRouter.post('/api/products', productController.post)
publicRouter.get('/api/products', productController.get)
publicRouter.get('/api/products/:id', productController.show)
publicRouter.delete('/api/products/:id', productController.destroy)


