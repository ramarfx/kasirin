import express, { Request, Response } from 'express'
import productController from '../controller/product.controller';
import { upload } from '../../index';
import cartController from '../controller/cart.controller';
import storeController from '../controller/store.controller';

export const publicRouter = express.Router();

publicRouter.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    })
})

publicRouter.post('/products/:store', productController.post)
publicRouter.get('/products/:store', productController.get)
publicRouter.get('/products/:store/:id', productController.show)
publicRouter.delete('/products/:store/:id', productController.destroy)

publicRouter.post('/products/:store/:id/add', cartController.addToCart)
publicRouter.get('/carts/:store', cartController.get)
publicRouter.delete('/carts/:store', cartController.destroyAll)
publicRouter.delete('/carts/:id', cartController.destroy);

// store new store (gatau bahasanya apaan)
publicRouter.post('/store', storeController.post);

// health
publicRouter.get('/health', (req: Request, res: Response) => {
  res.json({'message': 'ok bosskuh'})
})


