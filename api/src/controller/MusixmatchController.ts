
import { NextFunction, Request, Response } from "express";
import {
  getCountryCodeList, getLastTenAlbumsByArtist,
  getLastTenArtistsByCountryCode,
} from "../service/musixmatch.service";


export const getCountryCodeListHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await getCountryCodeList();
  res.status(200).json({
    status: "success",
    data: {
      result,
    },
  });
};

export const getLastTenArtistsByCountryCodeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const countryCode = req.params.countryCode;
  
  try {
    const result = await getLastTenArtistsByCountryCode(`${countryCode}`);
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

export const getLastTenAlbumsByArtistHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const artistId = req.params.artistId;

  try {
    const result = await getLastTenAlbumsByArtist(Number(artistId));
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
