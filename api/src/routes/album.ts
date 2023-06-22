import express from "express";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { createAlbumHandler, findAlbumByUserIdHandler, deleteAlbumByIdHandler } from "../controller/AlbumController";
import { createAlbumSchema } from "../schema/Album";
import { validate } from "../middleware/validate";

createAlbumHandler;
findAlbumByUserIdHandler;
deleteAlbumByIdHandler;

const router = express.Router();

router.use(deserializeUser, requireUser);

router.post(
  "/create",
  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Create Album',
            required: true,
            schema: { $ref: "#/definitions/Album" }
    } */
  /* #swagger.responses[200] = { 
      description: "create Album." } */
  validate(createAlbumSchema),
  createAlbumHandler
);

router.get(
  "/list",
  /* #swagger.responses[200] = { 
      description: "findAlbumByUserId." } */
  findAlbumByUserIdHandler
);

router.delete(
  "/:albumId",
  /* #swagger.responses[200] = { 
      description: "deleteAlbumById." } */
  deleteAlbumByIdHandler
);

export default router;
