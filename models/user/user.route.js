import { getUserByEmail, signin, signup } from './user.controller.js';
import { getUserByEmailValidation, signinValidation, signupValidation } from './user.validation.js';

import { authenticateToken } from '../../middlewares/authMiddleware.js';
import express from 'express';
import { validate } from '../../middlewares/validationMiddleware.js';

const router = express.Router();

router.post('/signup', validate(signupValidation), signup);
router.post('/signin', validate(signinValidation), signin);
router.get('/user/email', authenticateToken, validate(getUserByEmailValidation), getUserByEmail);
export default router;
