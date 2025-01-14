"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let ProductsService = class ProductsService {
    async getProducts() {
        const res = await axios_1.default.get('https://dummyjson.com/products');
        return res.data;
    }
    async getProductById(id) {
        const res = await axios_1.default.get(`https://dummyjson.com/products/${id}`);
        return res.data;
    }
    async createProduct(productData) {
        const res = await axios_1.default.post(`https://dummyjson.com/products/add`, productData);
        return res.data;
    }
    async updateProduct(id, productData) {
        const res = await axios_1.default.put(`https://dummyjson.com/products/${id}`, productData);
        return res.data;
    }
    async deleteProduct(id) {
        const res = await axios_1.default.delete(`https://dummyjson.com/products/${id}`);
        return res.data;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map