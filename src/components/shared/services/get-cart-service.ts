import { Cart } from "../models/cart";
import { CartModel } from "../models/cart.mongoose";

export async function getProductCartService(idProd: string): Promise<Cart | undefined> {
    
    const product = await CartModel.findOne({idProd}).lean();
    
    if ( !product ) return undefined;

    return {
        id: product._id.toString(),
        idProd: product.idProd,
        amount: product.amount,     
    };

}

export async function getProductsCartService(): Promise<Cart[]> {
    
    const cartProducts = await CartModel.find().lean();
    
    return cartProducts.map( cp => ({
        id: cp._id.toString(),
        idProd: cp.idProd,
        amount: cp.amount,     
    }));
}