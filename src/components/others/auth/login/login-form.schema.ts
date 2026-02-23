import { z } from 'zod';

import { emailSchema, passwordSchema } from "@/lib/schema";

export interface IEmailSchemaProps {
    requiredMsg: string;
    invalidMsg: string;
}

export interface IPasswordSchemaProps {
    requiredMsg: string;
}

export interface ILoginFormSchemaProps {
    email: IEmailSchemaProps;
    password: IPasswordSchemaProps;
}

export const getLoginFormSchema = ({ email, password }: ILoginFormSchemaProps) => z.object({
    email: emailSchema(email.requiredMsg, email.invalidMsg),
    password: passwordSchema(password.requiredMsg),
});
