import * as z from "zod";

export const userLoginSchema = z.object({
    email: z.email(),
    password: z.string(),
});

export const userRegisterSchema = z.object({
    email: z.email().max(255),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export const updateUserSchema = z.object({
    email: z.email().optional(),
    password: z.string().min(6).optional(),
});