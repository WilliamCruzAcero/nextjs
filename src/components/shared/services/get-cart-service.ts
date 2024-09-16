import { CartModel } from "../models/cart.mongoose";
import { Cart } from "../models/cart";

export async function getProductCartService(idProd: string): Promise<Cart | undefined> {
    
    const product = await CartModel.findOne({idProd}).lean();
    
    if ( !product ) return undefined;

    return {
        id: product._id.toString(),
        idProd: product.idProd,
        amount: product.amount,     
    };

}

export async function getProductsCartService() {
    
    const cartProducts = await CartModel.find().lean();
    // const count = cartProducts.length
    
    // return count 
    return cartProducts.map( c => ({
        id: c._id.toString(),
        idProd: c.idProd,
        amount: c.amount,     
    }));

}