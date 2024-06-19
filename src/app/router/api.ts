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
publicRouter.get('/products/:id', productController.show)
publicRouter.delete('/products/:store/:id', productController.destroy)

publicRouter.get('/carts', cartController.get)
publicRouter.delete('/carts', cartController.destroyAll)
publicRouter.delete('/carts/:id', cartController.destroy);
// publicRouter.post('/products/:id/add', cartController.addToCart)

// store new store (gatau bahasanya apaan)
publicRouter.post('/store', storeController.post);

// health
publicRouter.get('/api/health', (req: Request, res: Response) => {
  res.json({'message': 'ok bosskuh'})
})


