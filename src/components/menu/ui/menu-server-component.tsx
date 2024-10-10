'use server';

import { getAllProductsService } from "@/components/shared/services/get-product-service";
import { MenuClientComponent } from "./menu-client-component";

export async function MenuServerComponent() {
  const products = await getAllProductsService();
 
  return (
    <MenuClientComponent products={products}/>
  );
}