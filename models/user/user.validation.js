import { body, query } from 'express-validator';

// Validation rules for signup
export const signupValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

// Validation rules for signin
export const signinValidation = [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').notEmpty().withMessage('Password is required')
];

// Validation rules for getUserByEmail
export const getUserByEmailValidation = [
    query('email').isEmail().withMessage('Enter a valid email')
];