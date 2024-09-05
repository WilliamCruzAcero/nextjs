"use client";

import { Input, Select, SelectItem } from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserForm, UserFormSchema } from "../domain/user-form";
import { UserAction } from "../actions/user-action";
import { SubmitButton } from "@/components/shared/ui/submit-button";
import { useRouter } from "next/navigation";

type UserFormProps = {
    size?: 'sm' | 'md' | 'lg';
}

const roles = [
    {key: "admin", label: "ADMIN"},
    {key: "client", label: "CLIENT"},
  ];


export function UserFormComponent({ size }: UserFormProps) {
    const router = useRouter();
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
    } = useForm<UserForm>({
        resolver: zodResolver(UserFormSchema),
        defaultValues: {}
    });

    const onSubmit: SubmitHandler<UserForm> = async (data) => {
        const { errors } = await UserAction(data);
        if (errors.length === 0) router.push('/login');
        alert(JSON.stringify(errors));
    }

    return (
        <form
            className="w-2/5 min-w-80 flex flex-col gap-4 items-center"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                size={size}
                type="name"
                label="Name"
                {...register("name")}
                isInvalid={errors.name ? true : false}
                errorMessage={errors.name?.message}
            />
            <Input
                size={size}
                type="lastname"
                label="Lastname"
                {...register("lastname")}
                isInvalid={errors.lastname ? true : false}
                errorMessage={errors.lastname?.message}
            />
            <Input
                size={size}
                type="email"
                label="Email"
                {...register("email")}
                isInvalid={errors.email ? true : false}
                errorMessage={errors.email?.message}
            />
            <Input
                size={size}
                type="password"
                label="Password"
                {...register('password')}
                isInvalid={errors.password ? true : false}
                errorMessage={errors.password?.message}
            />
            <Select
                label="Role"
                {...register('role')}
                defaultSelectedKeys={["client"]}                
            >
                {roles.map((role) => (
                    <SelectItem key={role.key}>
                        {role.label}
                    </SelectItem>
                ))}
            </Select>
            <SubmitButton label="Send" color="primary" isSubmitting={isSubmitting} />
        </form>
    )
}  