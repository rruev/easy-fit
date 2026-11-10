import { authService, userService } from "../services/index.js";
import { getErrors } from "../utils/errors.util.js";
import { userRegisterSchema, userLoginSchema } from "../schemas/user.schema.js";

export const register = async (req, res) => {
    try {
        const validatedData = await userRegisterSchema.parseAsync(req.body);
        const { user, token } = await authService.register(validatedData);

        res.cookie("auth-token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(201).json({
            id: user.id,
            email: user.email,
        });
    } catch (error) {
        const errors = getErrors(error);
        res.status(400).json({ errors });
    }
}

export const login = async (req, res) => {
    try {
        const validatedData = await userLoginSchema.parseAsync(req.body);
        const { user, token } = await authService.login(validatedData);

        res.cookie("auth-token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            id: user.id,
            email: user.email,
        });
    } catch (error) {
        const errors = getErrors(error);
        res.status(400).json({ errors });
    }
}

export const logout = (req, res) => {
    res.clearCookie("auth-token", {
        httpOnly: true,
        secure: true,
        sameSite: "None",
    });
    res.status(200).json({ message: "Logged out successfully" });
}

export const getUser = async (req, res) => {
    try {
        const user = await userService.findByEmail(req.user.email);
        if (!user) {
            return res.status(404).json({ authentication: ["User not found"] });
        }
        res.status(200).json({
            id: user.id,
            email: user.email,
        });
    } catch (error) {
        const errors = getErrors(error);
        res.status(400).json({ errors });
    }
}