import express from 'express';
import { Request, Response } from 'express';
import {
  createUserHandler,
  forgotPasswordHandler,
  getCurrentUserHandler,
  resetPasswordHandler,
  verifyUserHandler,
} from '../controller/user.controller';
import requireUser from '../middleware/requireUser';
import validateResource from '../middleware/validateResource';
import {
  createUserSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  verifyUserSchema,
} from '../schema/user.schema';

const router = express.Router();

router.post(
  '/api/users',
  validateResource(createUserSchema),
  createUserHandler
);

router.post(
  '/api/users/verify/:id/:verificationCode',
  validateResource(verifyUserSchema),
  verifyUserHandler
);

router.post(
  '/api/users/forgotpassword',
  validateResource(forgotPasswordSchema),
  forgotPasswordHandler
);

router.post(
  '/api/users/resetpassword/:id/:passwordResetCode',
  validateResource(resetPasswordSchema),
  resetPasswordHandler
);

router.get('/api/users/me', requireUser, getCurrentUserHandler);

router.get('/api/auth', requireUser, (req: Request, res: Response) => {
  return res.status(201).send('User is authenticated!');
});

export default router;
