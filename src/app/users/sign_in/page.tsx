"use client";

import { useState } from "react";
import { z } from "zod";
import { useAuthStore } from "@/store/useAuthStore";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

const SignInPage = () => {
    const { setUser } = useAuthStore();
    const [errors, setErrors] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErrors(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        };

        const result = loginSchema.safeParse(data);

        if (!result.success) {
            setErrors("Invalid email or password format");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/users/sign_in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ user: data }),
            });

            if (!response.ok) {
                throw new Error("Login failed");
            }

            setUser(data.email);
            alert("Login successful!");
        } catch (error) {
            setErrors("Invalid credentials");
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-96"
            >
                <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>

                {errors && (
                    <p className="text-red-500 text-sm mb-4">{errors}</p>
                )}

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full mb-4 p-2 border rounded"
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full mb-6 p-2 border rounded"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default SignInPage;
