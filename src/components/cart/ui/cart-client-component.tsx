'use client';

import React from "react"; import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Card } from "@nextui-org/react";
import { CartProducts } from "../services/products.cart";

type CartClientComponentProps = {
    cartProducts: CartProducts[];
}

const columnsDetail = [
    { key: "amount", label: "AMOUNT" },
    { key: "name", label: "NAME" },
    { key: "price", label: "PRICE" },
    { key: "subtotal", label: "SUBTOTAL" },
];

const columnsTotal = [
    {key: "total", label: "TOTAL"},
    {key: "iva", label: "IVA"},
]

export function CartClientComponent({ cartProducts }: CartClientComponentProps) {
    let total = 0;
    cartProducts.forEach(e => {
        total += e.subtotal
    });

    return (
        <section className="w-11/12">
            <Table className="text-slate-950">
                <TableHeader>
                    {columnsDetail.map((column) => <TableColumn key={column.key}>{column.label}</TableColumn>)}
                </TableHeader>
                <TableBody>
                    {cartProducts.map((row) => (
                        <TableRow key={row.key}>
                            {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
                        </TableRow>
                    ))}
                </TableBody>
            </Table >
            <Table className="text-slate-950">
                <TableHeader>
                {columnsTotal.map((column) => <TableColumn key={column.key}>{column.label}</TableColumn>)}
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>2</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>
    );
}