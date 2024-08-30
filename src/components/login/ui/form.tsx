"use client";

import { Input } from "@nextui-org/react";
import { SubmitButton } from '../../shared/ui/submit-button'
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginForm, LoginFormSchema } from "../domain/login-from";
import { loginAction } from "../actions/login-actions";
import { useRouter } from 'next/navigation';

type LoginFormProps = {
    size?: 'sm' | 'md' | 'lg';
}

export function LoginFormComponent({ size }: LoginFormProps) {
    const router = useRouter();
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
    } = useForm<LoginForm>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {}
    });

    const onSubmit: SubmitHandler<LoginForm> = async (data) => {

        const {errors} = await loginAction(data);
        if ( errors.length === 0) router.push('/chat');
        alert(JSON.stringify(errors));
    }

    return (
        <form
            className="w-2/5 min-w-80 flex flex-col gap-4 items-center"
            onSubmit={handleSubmit(onSubmit)}
            >
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
            <SubmitButton label="Login" color="primary" isSubmitting={isSubmitting} />
        </form>
    )
}