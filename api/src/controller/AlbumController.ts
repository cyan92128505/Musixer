import { User } from "../entity/User";
import {
  createAlbum,
  deleteAlbumById,
  findAlbumByUserId,
} from "./../service/album.service";
import { NextFunction, Request, Response } from "express";

export const createAlbumHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user as User;

    const { albumId, albumName, artistId, artistName } = req.body;

    const result = await createAlbum(
      {
        albumId,
        albumName,
        artistId,
        artistName,
        user,
      },
      user
    );

    res.status(200).json({
      status: "success",
      data: {
        result,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const findAlbumByUserIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user as User;
    const result = await findAlbumByUserId(user);

    res.status(200).json({
      status: "success",
      data: {
        result,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const deleteAlbumByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.albumId;
    const result = await deleteAlbumById(id);

    res.status(200).json({
      status: "success",
      data: {
        result,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
