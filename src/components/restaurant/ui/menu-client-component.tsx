'use client';

import React from "react";
import { Product } from "@/components/shared/models/product";
import { ProductCard } from "@/components/shared/ui/productCart";

type MenuClientComponentProps = {
  products: Product[]
}

export function MenuClientComponent({ products }: MenuClientComponentProps) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
}