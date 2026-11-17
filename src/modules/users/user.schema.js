import { z } from 'zod';
const createUserSchema = z.object({
    name: z.string().min(3, 'Name is required'),
    email: z.string().email('Invalid email address'),
});

const userIdSchema = z.object({
    id: z.string().uuid('Invalid user ID'),
});

const updateUserSchema = z.object({
    id: z.string().uuid('Invalid user ID'),
    name: z.string().min(3, 'Name is required').optional(),
    email: z.string().email('Invalid email address').optional(),
}).refine((data) => data.name || data.email, {
    message: 'At least one field (name or email) must be provided for update',
});

export { createUserSchema, userIdSchema, updateUserSchema };