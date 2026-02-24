import { z } from 'zod';

export const getEmailSchema = (requiredMsg: string, invalidMsg: string) =>
    z.string().trim().min(1, requiredMsg).email({ message: invalidMsg }).toLowerCase();

export const getPasswordSchema = (requiredMsg: string) => z.string().trim().min(1, requiredMsg);
