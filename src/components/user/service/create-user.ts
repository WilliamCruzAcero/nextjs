
import { UserModel } from "@/components/shared/models/user.mongoose"
import { hash } from "./hash-service";

export async function createUser(name: string, lastname: string, email: string, password: string) {
    
    const hashedPassword = await hash(password);
    
    await UserModel.create({
        name,
        lastname,
        email,
        password: hashedPassword,
    })   

    return { errors: [] }; 
}