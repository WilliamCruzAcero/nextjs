'use client';

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Product } from "@/components/shared/models/product";
import { ProductCard } from "@/components/shared/ui/product";

type MenuClientComponentProps = {
  products: Product[]
}

export function MenuClientComponent({ products }: MenuClientComponentProps) {
  return (
    <>
      <div>
        <button>Pagar</button>
      </div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard product={product} key={index}/>
        ))}
      </div>
    </>
  );
}