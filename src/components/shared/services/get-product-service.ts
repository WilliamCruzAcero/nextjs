import { Product } from "../models/product";
import { ProductModel } from "../models/product.mongoose";

export async function getProductsService(): Promise<Product[]> {
    const products = await ProductModel.find().lean();

    return products.map( p => ({
        id: p._id.toString(),
        name: p.name,
        img: p.img,
        price: p.price,
        active: p.active
    }));
}