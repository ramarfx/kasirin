import express from 'express'
import productController from '../controller/product.controller';
import { upload } from '../../index';

export const publicRouter = express.Router();

publicRouter.get('/', (req, res) => {
    res.json({
        message: 'hello from api.ts'
    })
})

publicRouter.post('/products', productController.post)
publicRouter.get('/products', productController.get)
publicRouter.get('/products/:id', productController.show)
publicRouter.delete('/products/:id', productController.destroy)


