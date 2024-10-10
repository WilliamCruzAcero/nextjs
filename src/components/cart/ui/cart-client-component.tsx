'use client';

import React from "react"; import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { CartProducts } from "../services/products.cart";

type CartClientComponentProps = {
    cartProducts: CartProducts[];
}

const columns = [
    { key: "amount", label: "AMOUNT" },
    { key: "name", label: "NAME" },
    { key: "price", label: "PRICE" },
    { key: "subtotal", label: "SUBTOTAL" },
];

export function CartClientComponent({ cartProducts }: CartClientComponentProps) {
    return (
        <Table className="text-slate-950" aria-label="Example static collection table">
            <TableHeader>
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
            </TableHeader>
            <TableBody items={cartProducts}>
                {(item) => (
                    <TableRow key={item.key}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table >
    );
}