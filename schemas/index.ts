import * as z from "zod";

export const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(1, "Password is required"),
});

export const RegisterSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email(),
    password: z
        .string()
        .min(8, "Password is required to be at least 8 characters long"),
});
