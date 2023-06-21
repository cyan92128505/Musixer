import express from 'express';
import {
  loginUserHandler,
  logoutHandler,
  refreshAccessTokenHandler,
  registerUserHandler,
} from "../controller/AuthController";
import { deserializeUser } from '../middleware/deserializeUser';
import { requireUser } from '../middleware/requireUser';
import { validate } from '../middleware/validate';
import {
  createUserSchema,
  loginUserSchema,
} from '../schema/User';

const router = express.Router();

router.post(
  "/register",
  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Register User.',
            required: true,
            schema: { $ref: "#/definitions/RegisterUser" }
    } */
  /* #swagger.responses[201] = { 
      schema: { "$ref": "#/definitions/RegisterRes" },
      description: "User registered successfully." } */
  validate(createUserSchema),
  registerUserHandler
);
router.post(
  "/login",
  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Login User.',
            required: true,
            schema: { $ref: "#/definitions/LoginUser" }
    } */
  /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/LoginRes" },
      description: "User registered successfully." } */
  validate(loginUserSchema),
  loginUserHandler
);
router.get('/logout', deserializeUser, requireUser, logoutHandler);
router.get('/refresh', refreshAccessTokenHandler);

export default router;
