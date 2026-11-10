import bcrypt from "bcrypt";

import { userService } from "./index.js";
import { generateToken } from "../utils/token.util.js";

export const register = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await userService.create({ ...data, password: hashedPassword });
    const token = generateToken(user);
    return { user, token };
};

export const login = async (data) => {
    const user = await userService.findByEmail(data.email);
    if (!user) {
        const error = new Error("User not found");
        error.name = 'UserNotFound';
        throw error;
    }
    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
        const error = new Error("Invalid password");
        error.name = 'InvalidPassword';
        throw error;
    }
    const token = generateToken(user);
    return { user, token };
};