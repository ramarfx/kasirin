"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = __importDefault(require("../controller/product.controller"));
const cart_controller_1 = __importDefault(require("../controller/cart.controller"));
exports.publicRouter = express_1.default.Router();
exports.publicRouter.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    });
});
exports.publicRouter.post('/products', product_controller_1.default.post);
exports.publicRouter.get('/products', product_controller_1.default.get);
exports.publicRouter.get('/products/:id', product_controller_1.default.show);
exports.publicRouter.delete('/products/:id', product_controller_1.default.destroy);
exports.publicRouter.get('/carts', cart_controller_1.default.get);
exports.publicRouter.delete('/carts', cart_controller_1.default.destroyAll);
exports.publicRouter.delete('/carts/:id', cart_controller_1.default.destroy);
exports.publicRouter.post('/products/:id/add', cart_controller_1.default.addToCart);
//# sourceMappingURL=api.js.map