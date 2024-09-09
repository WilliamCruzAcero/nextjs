import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Product } from "../models/product";

type ProductComponentProps = {
    product: Product
}

export function ProductCard({product}: ProductComponentProps) {
    return (
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={product.name}
                    className="w-full object-cover h-[140px]"
                    src={product.img}
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b>{product.name}</b>
                <p className="text-default-500">{product.price}</p>
            </CardFooter>
        </Card>

    )
}