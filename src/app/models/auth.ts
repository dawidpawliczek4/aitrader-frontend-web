import { z } from "zod";

export const AuthenticatedUserData = z.object({
    id: z.number().int(),
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    role: z.string(),
    createdAt: z.string()
})
export type AuthenticatedUserData = Readonly<z.infer<typeof AuthenticatedUserData>>

export const AuthResponse = z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
    expiresIn: z.number(),
    user: AuthenticatedUserData
})
export type AuthResponse = z.infer<typeof AuthResponse>
