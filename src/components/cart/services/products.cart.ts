import { getProductsCartService } from "@/components/shared/services/get-cart-service"
import { getProductByIdService } from "@/components/shared/services/get-product-service";

export type CartProducts = {
    key: string,
    amount: number,
    name: string,
    price: number,
    subtotal: number
}

export async function getProductsCart() {
    let rows: CartProducts[] = [];
    const cartProducts = await getProductsCartService();

    for (let i = 0; i < cartProducts.length; i++) {
        const product = await getProductByIdService(cartProducts[i].idProd)
        if (!product) throw 'Error';

        const productF = {
            key: (i + 1).toString(),
            amount: cartProducts[i].amount,
            name: product?.name,
            price: parseInt(product?.price),
            subtotal: parseInt(product?.price) * cartProducts[i].amount
        }
        rows.push(productF)
    }
    return rows
}