import express from 'express';
import { deserializeUser } from '../middleware/deserializeUser';
import { requireUser } from '../middleware/requireUser';
import {
  getCountryCodeListHandler,getLastTenArtistsByCountryCodeHandler,
  getLastTenAlbumsByArtistHandler,
  getTracksByAlbumIdHandler,
} from "../controller/MusixmatchController";

const router = express.Router();

router.use(deserializeUser, requireUser);

router.get(
  "/getCountryCodeList",
  /* #swagger.responses[200] = { 
      description: "getLastTenArtistsByCountryCodeHandler." } */
  getCountryCodeListHandler
);

router.get(
  "/getLastTenArtistsByCountryCode/:countryCode",
  /* #swagger.responses[200] = { 
      description: "getLastTenArtistsByCountryCodeHandler." } */
  getLastTenArtistsByCountryCodeHandler
);

router.get(
  "/getLastTenAlbumsByArtist/:artistId",
  /* #swagger.responses[200] = { 
      description: "getLastTenAlbumsByArtistHandler." } */
  getLastTenAlbumsByArtistHandler
);

router.get(
  "/getTracksByAlbumId/:albumId",
  /* #swagger.responses[200] = { 
      description: "getLastTenAlbumsByArtistHandler." } */
  getTracksByAlbumIdHandler
);




export default router;
