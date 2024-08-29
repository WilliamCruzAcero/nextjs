"use client";

import { Input } from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserForm, UserFormSchema } from "../domain/user-form";
import { UserAction } from "../actions/user-action";
import { SubmitButton } from "@/components/shared/ui/submit-button";
 
type UserFormProps = {
    size?: 'sm' | 'md' | 'lg';
}

export function UserFormComponent({ size }: UserFormProps) {
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
    } = useForm<UserForm>({
        resolver: zodResolver(UserFormSchema),
        defaultValues: {}
    });
    
    const onSubmit: SubmitHandler<UserForm> = async (data) => {
        const {errors} = await UserAction(data);
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
            <SubmitButton label="Send" color="primary" isSubmitting={isSubmitting} />
        </form>
    )
}