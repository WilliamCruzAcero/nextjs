import mongoose from "mongoose";
import { User } from "./user";

const UserSchema = new mongoose.Schema<User>({
    name: { type: String, require: true },
    lastname: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    active: { type: Boolean, default: true },
    role: {type: String,  require: true},
});

export const UserModel: mongoose.Model<User> = mongoose.models.User || mongoose.model('User', UserSchema);