import { TableCell, TableRow } from "@nextui-org/react";
import { Cart } from "../models/cart";

type TableRowProps = {
  product: Cart,
  key: number
}


export async function TableRowComponent(product: TableRowProps) {
  // const idProd = product.product.idProd
  // console.log(idProd)
  return (
    <TableRow key={product.key}>
      <TableCell>Tony Reichert</TableCell>
      <TableCell>CEO</TableCell>
      <TableCell>Active</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>

  )
}

