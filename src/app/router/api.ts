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

publicRouter.post('/products', productController.post)
publicRouter.get('/products', productController.get)
publicRouter.get('/products/:id', productController.show)
publicRouter.delete('/products/:id', productController.destroy)

publicRouter.get('/carts', cartController.get)
publicRouter.delete('/carts', cartController.destroyAll)
publicRouter.delete('/carts/:id', cartController.destroy);
publicRouter.post('/products/:id/add', cartController.addToCart)


