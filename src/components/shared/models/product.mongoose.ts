import mongoose from "mongoose";
import { Product } from "./product";

const ProductSchema = new mongoose.Schema<Product>({
    name: { type: String, require: true },
    img: { type: String, require: true},
    price: { type: String, require: true},
    active: { type: Boolean, default: true},
});

export const ProductModel: mongoose.Model<Product> = mongoose.models.Product || mongoose.model('Product', ProductSchema);