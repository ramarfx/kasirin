"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const utils_1 = require("../utils/utils");
const addToCart = (product) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!product) {
            throw new Error("product not found");
        }
        const cart = yield database_1.prisma.cart.findFirst({
            where: {
                product_id: product.id,
            },
        });
        if (cart) {
            yield database_1.prisma.cart.update({
                where: {
                    id: cart.id,
                },
                data: {
                    amount: cart.amount + 1,
                },
            });
        }
        else {
            yield database_1.prisma.cart.create({
                data: {
                    product_id: product.id,
                    amount: 1,
                },
            });
        }
        return { message: `product ${product.name} added to cart` };
    }
    catch (error) {
        throw new Error(error);
    }
});
const get = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carts = yield database_1.prisma.cart.findMany({
            select: {
                product: true,
                id: true,
                amount: true,
            }
        });
        const cartsWithNumbers = carts.map(cart => (Object.assign(Object.assign({}, cart), { product: Object.assign(Object.assign({}, cart.product), { price: Number(cart.product.price) }) })));
        const total = cartsWithNumbers.reduce((total, cart) => {
            return total + cart.product.price * cart.amount;
        }, 0);
        return {
            carts: (0, utils_1.convertBigIntToNumber)(carts),
            total: total
        };
    }
    catch (error) {
        throw new Error(error);
    }
});
const destroy = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield database_1.prisma.cart.findFirstOrThrow({
            where: {
                id: id
            }
        });
        yield database_1.prisma.cart.delete({
            where: {
                id: cart.id
            }
        });
        return { message: 'cart deleted' };
    }
    catch (error) {
        throw new Error(error);
    }
});
const destroyAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.prisma.cart.deleteMany();
        return { message: 'all cart deleted' };
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.default = {
    addToCart,
    get,
    destroy,
    destroyAll
};
//# sourceMappingURL=cart.service.js.map