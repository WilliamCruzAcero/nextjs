'use server';

import React from "react";
import { getProductsService } from "@/components/shared/services/get-product-service";
import { MenuClientComponent } from "./menu-client-component";

export async function MenuServerComponent() {
  const products = await getProductsService();
 
  return (
    <MenuClientComponent products={products}/>
  );
}