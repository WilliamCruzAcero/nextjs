'use client';

import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export function CardRestaurantComponent() {
  const list = [
    {
      name: "Carne Frita",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvDcMCz1JZjwrmRSHQXF7mL_Z8TlKCLifKEQ&s",
      price: "$ 12000",
    },
    {
      name: "Carne asada",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEt51L7no5YWFOS-0fMA6flrfmrXgtMENGUg&s",
      price: "$ 18000",
    },
    {
      name: "Pollo frito",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtw7WrEI9hKEAh047Lvl-i6xgT7oCBMrkhMQ&s",
      price: "$ 12000",
    },
    {
      name: "Pescado frito",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdE-qRK_KpS4CIwNejlM45Gn2sOPwsuUwzg&s",
      price: "$ 18000",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.name}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.name}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}