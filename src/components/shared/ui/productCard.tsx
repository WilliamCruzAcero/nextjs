/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { Product } from "../models/product";
import { MenuAction } from "@/components/menu/actions/menu-action";
import { useRouter } from "next/navigation";


type ProductComponentProps = {
    product: Product
}

export function ProductCard(product: ProductComponentProps) {
    const router = useRouter();
    const [count, setCount] = useState(1);
    const idProd = product.product.id

    const addCart = () => {
        MenuAction(idProd, count)
        router.push('/menu')
    }

    const remove = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const add = () => {
        setCount(count + 1)
    }

    return (
        <table className="w-full">
            <tbody className="w-full">
                <tr className="w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-full p-4">
                        <img src={product.product.img} className="w-max md:w-64 min-w-80 max-w-screen-xl max-h-full sm:rounded-lg" />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {product.product.name}
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex items-center">
                            <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={remove}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"
                                    />
                                </svg>
                            </button>
                            <div>
                                <p className=" text-center bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{count}</p>
                            </div>
                            <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={add}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        $ {product.product.price}
                    </td>
                    <td className="px-6 py-4 cursor-pointer " onClick={addCart}>
                        <a className="font-medium text-blue-600 hover:text-green-500 hover:underline ">add cart</a>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}