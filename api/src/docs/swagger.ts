import { Album } from './../entity/Album';
import {
  getLastTenAlbumsByArtistRequestType,
  getLastTenArtistsByCountryCodeRequestType,
} from "./../service/musixmatch.service";
require("dotenv").config();
import path from "path";
import swaggerAutogen from "swagger-autogen";
import { User } from "../entity/User";

async function swaggerGen() {
  const user = new User();
  user.name = "Jhon Doe";
  user.password = "abcd1234";
  user.email = "a@a.com";

  const album = new Album();
  album.albumId = 48445718;
  album.albumName = "好不容易 (《華燈初上》片尾曲) - Single";
  album.artistId = 34470265;
  album.artistName = "告五人";

  const doc = {
    info: {
      version: "1.0.0",
      title: "Musixer API",
      description: "",
    },
    host: process.env.API_HOST,
    basePath: "/",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
      {
        name: "User",
        description: "Endpoints",
      },
    ],
    securityDefinitions: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    definitions: {
      Album: album,
      User: user,
      RegisterUser: { ...user, passwordConfirm: user.password },
      LoginUser: {
        email: user.email,
        password: user.password,
      },
      RegisterRes: {
        status: "success",
        message: "User registered successfully",
      },
      LoginRes: {
        status: "success",
        access_token: "access_token",
      },
      getLastTenAlbumsByArtistRequestType: {
        artist_id: "34470265",
      },
      getLastTenArtistsByCountryCodeRequestType: {
        countryCode: "tw",
      },
    },
  };
  const outputFile = path.join(process.cwd(), "swagger-output.json");
  const endpointsFiles = [path.join(process.cwd(), "src/routes/index.ts")];
  swaggerAutogen()(outputFile, endpointsFiles, doc);
}

swaggerGen();
