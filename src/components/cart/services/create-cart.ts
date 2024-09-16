import { CartModel } from "@/components/shared/models/cart.mongoose";

export async function createCart(idProd: string, amount: number) {
    await CartModel.create({
        idProd,
        amount
    })
    
    return { errors: [] }
}

export async function updateCart(amount: number) {
    console.log('UPDATE')// await CartModel
}
