'use server';

import { CartClientComponent } from "./cart-client-component";
import { getProductsCart } from "../services/products.cart";

export async function CartServerComponent() {
    const cartProducts = await getProductsCart();
    
    return (
        <CartClientComponent cartProducts={cartProducts} />
    )
}