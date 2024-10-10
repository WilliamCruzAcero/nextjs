import { CartModel } from "@/components/shared/models/cart.mongoose";
import { model } from "mongoose";

export async function createCart(idProd: string, amount: number) {
    await CartModel.create({
        idProd,
        amount
    })
    
    return { errors: [] }
}

export async function updateCart(idProd: string, newAmount: number) {
    await CartModel.findOneAndUpdate(
        {idProd},
        {$inc: {amount: newAmount}}
    );
}
