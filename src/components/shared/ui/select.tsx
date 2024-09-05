import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const roles = [
    { key: "admin", label: "ADMIN" },
    { key: "client", label: "CLIENT" },
];

export default function SelectMul() {
    return (
        <Select
            label="role"
            placeholder="Select an role"
            defaultSelectedKeys={["client"]}
            className="max-w-xs"
        >
            {roles.map((role) => (
                <SelectItem key={role.key}>
                    {role.label}
                </SelectItem>
            ))}
        </Select>
    );
}
