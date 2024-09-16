import mongoose from "mongoose";
import { Cart } from "./cart";

const CartSchema = new mongoose.Schema<Cart>({
    idProd: {type: String, require: true},
    amount: {type: Number, require: true},
});

export const CartModel: mongoose.Model<Cart> = mongoose.models.Cart || mongoose.model('Cart', CartSchema)