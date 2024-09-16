import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Badge } from "@nextui-org/react";
import { CartIcon } from "@nextui-org/shared-icons";
import { countProdService } from "@/components/cart/actions/cart-action";

export default function NavbarApp() {
    let count
    const countProd = () => {
        count = countProdService();
    }
    countProd();

    return (
        <Navbar>
            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem
                    as={Link}
                    href={'/cart'}
                    className="cursor-pointer"
                >
                    <Badge color="danger" content={count} shape="circle">
                            <CartIcon size={30} />
                        </Badge>
                </NavbarItem>
                <NavbarItem >
                    <Button as={Link} color="primary" href="/" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}



export const AcmeLogo = () => (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
        <path
            clipRule="evenodd"
            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);