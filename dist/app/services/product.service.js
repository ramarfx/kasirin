"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const database_1 = __importStar(require("../database"));
const utils_1 = require("../utils/utils");
const post = (request) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(request.body.name || request.body.price || request.body.image)) {
            throw new Error("invalid field");
        }
        const file = request.file;
        if (!file) {
            throw new Error("no file uploaded");
        }
        const filename = `${Date.now()}-${file.originalname}`;
        const { error } = yield database_1.default.storage
            .from("product")
            .upload(filename, file.buffer);
        if (error) {
            throw new Error(error.message);
        }
        const imagePath = database_1.default.storage.from("product").getPublicUrl(filename)
            .data.publicUrl;
        const product = yield database_1.prisma.product.create({
            data: {
                name: request.body.name,
                price: request.body.price.toString(),
                image: imagePath,
            },
        });
        return (0, utils_1.convertBigIntToNumber)(product);
    }
    catch (error) {
        throw new Error(error);
    }
});
const get = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield database_1.prisma.product.findMany();
        if (!products) {
            throw new Error("product is not empty");
        }
        return products.map(utils_1.convertBigIntToNumber);
    }
    catch (error) {
        throw new Error(error);
    }
});
const show = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield database_1.prisma.product.findFirst({
            where: {
                id: id,
            },
        });
        if (!product) {
            throw new Error("product not found");
        }
        return (0, utils_1.convertBigIntToNumber)(product);
    }
    catch (error) {
        throw new Error(error);
    }
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield database_1.prisma.product.findFirst({
            where: {
                id: id,
            },
        });
        if (!product) {
            throw new Error("product not found");
        }
        const { error } = yield database_1.default.storage
            .from("product")
            .remove([product.image]);
        if (error) {
            throw new Error(error.message);
        }
        yield database_1.prisma.product.delete({
            where: {
                id: product.id,
            },
        });
        return {
            message: "product deleted",
        };
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.default = {
    post,
    get,
    show,
    deleteProduct
};
//# sourceMappingURL=product.service.js.map