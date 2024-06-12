import express from 'express'
import productController from '../controller/product.controller';
import { upload } from '../../index';
import cartController from '../controller/cart.controller';

export const publicRouter = express.Router();

publicRouter.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    })
})

// product
publicRouter.post('/api/products', productController.post)
publicRouter.delete('/api/products', productController.destroyAll)
publicRouter.get('/api/products', productController.get)
publicRouter.get('/api/products/:id', productController.show)
publicRouter.delete('/api/products/:id', productController.destroy)

// cart
publicRouter.get('/api/carts', cartController.get)
publicRouter.delete('/api/carts', cartController.destroyAll)
publicRouter.delete('/api/carts/:id', cartController.destroy);
publicRouter.post('/api/products/:id/add', cartController.addToCart)


