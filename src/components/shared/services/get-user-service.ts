import { User } from "@/components/shared/models/user";
import { UserModel } from "@/components/shared/models/user.mongoose";

export async function getUserService(email: string): Promise<User | undefined> {
    const user = await UserModel.findOne({ email }).lean();
    
    if (!user) return undefined;

    return {
        id: user._id.toString(),
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        active: user.active
    }
}