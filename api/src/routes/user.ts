import express from 'express';
import { getMeHandler } from '../controller/UserController';
import { deserializeUser } from '../middleware/deserializeUser';
import { requireUser } from '../middleware/requireUser';

const router = express.Router();

router.use(deserializeUser, requireUser);

router.get(
  "/me",
  /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/User" },
      description: "User registered successfully." } */
  getMeHandler
);

export default router;
