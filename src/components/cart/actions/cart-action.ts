'use server';

import { getProductCartService, getProductsCartService } from "@/components/shared/services/get-cart-service";
import { conectDB } from "@/components/connectDataBase/conect";
import { createCart, updateCart } from "../services/create-cart";

conectDB();

export async function CartAtion(idProd: string, amount: number) {
    
    const cartProduct = await getProductCartService(idProd)
    if ( !cartProduct ) {
        await createCart(idProd, amount);
    } else {
        await updateCart(amount)
    }

    return { errors: [] }; 
}

export async function countProdService() {
    const countProd = await getProductsCartService();
    const count = countProd.length;
    return count;
}