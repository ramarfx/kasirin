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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = __importDefault(require("../services/product.service"));
const cart_service_1 = __importDefault(require("../services/cart.service"));
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_service_1.default.show(Number(req.params.id));
        const result = yield cart_service_1.default.addToCart(product);
        res.json({ data: result });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cart_service_1.default.get();
        res.json({ data: result });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
const destroy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cart_service_1.default.destroy(Number(req.params.id));
        res.json(result);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
const destroyAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cart_service_1.default.destroyAll();
        res.json(result);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.default = {
    addToCart,
    get,
    destroy,
    destroyAll
};
//# sourceMappingURL=cart.controller.js.map