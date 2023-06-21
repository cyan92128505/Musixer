import path from "path";
import swaggerAutogen from "swagger-autogen";
import { User } from "../entity/User";

async function swaggerGen(){
    const user = new User();
    user.name = "Jhon Doe";
    user.password = "abcd1234";
    user.email = "a@a.com";

    const doc = {
      info: {
        version: "1.0.0",
        title: "Musixer API",
        description: "",
      },
      host: "localhost:7000",
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
      },
    };
    const outputFile = path.join(process.cwd(), "swagger-output.json");
    const endpointsFiles = [path.join(process.cwd(), "src/routes/index.ts")];
    swaggerAutogen()(outputFile, endpointsFiles, doc);
}

swaggerGen();