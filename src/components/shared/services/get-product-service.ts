import { Types } from "mongoose";
import { Product } from "../models/product";
import { ProductModel } from "../models/product.mongoose";

export async function getAllProductsService(): Promise<Product[]> {
    const products = await ProductModel.find().lean();

    return products.map( p => ({
        id: p._id.toString(),
        name: p.name,
        img: p.img,
        price: p.price,
        active: p.active
    }));
}

export async function getProductByIdService(idProd: string): Promise<Product | undefined> {
   
    const  product = await ProductModel.findById(idProd).lean();
    
    if ( !product ) return undefined;

    return {
        id: product?._id.toString(),
        name: product.name,
        img: product.img,
        price: product.price,
        active: product.active
    };
}