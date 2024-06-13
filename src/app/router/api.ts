import express, { Request, Response } from 'express'
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

// cart
publicRouter.get('/api/carts', cartController.get)
publicRouter.delete('/api/carts', cartController.destroyAll)
publicRouter.delete('/api/carts/:id', cartController.destroy);
publicRouter.post('/api/products/:id/add', cartController.addToCart)

// health
publicRouter.get('/api/health', (req: Request, res: Response) => {
  res.json({'message': 'ok bosskuh'})
})


