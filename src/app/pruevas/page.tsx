'use client'

import React from "react";
import { AcmeLogo } from "@/components/shared/ui/navbar";
import { Badge, Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, Switch } from "@nextui-org/react";
import { CartIcon } from "@nextui-org/shared-icons";
import { countProdService } from "@/components/menu/actions/menu-action";

export default function Prueva() {
    const isInvisible = 
    // true
    false
    // ;
    
    return (
        <>
            <Navbar>
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
                <NavbarContent justify="end">
                    <NavbarItem
                        as={Link}

                        className="cursor-pointer"
                    >
                        <Badge color="danger" content={10} isInvisible={isInvisible} shape="circle">
                            <CartIcon size={30} />
                        </Badge>
                    </NavbarItem>

                </NavbarContent>
            </Navbar>
        </>
    );
}